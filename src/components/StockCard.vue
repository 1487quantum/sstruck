<template>
  <div
  v-if="isShowing"
  ref="interactElement"
  class="stcard card"
  :class="{
    isAnimating: isInteractAnimating,
      isCurrent: isCurrent
       }"
  :style="{ transform: transformString }"

  >
  <img :src="getPath(stcard.c_img)" class="card-img-top pt-5 pl-5 pr-5" style="width: 80%" alt="st-img">
  <div class="card-body ">
    <h5 class="card-title">{{stcard.c_ticker}}: {{stcard.c_title}}</h5>
    <h6 class="card-subtitle mb-2">${{stcard.c_price}} (<i class="fas fa-arrow-down" style="color:#E74C3C" v-if="stcard.c_sym===0"></i><i class="fas fa-grip-lines" v-if="stcard.c_sym===1"></i><i class="fas fa-arrow-up" style="color:#2ECC71" v-if="stcard.c_sym===2"></i> {{stcard.c_pct}}%)</h6>
    <p class="card-text text-justify">{{stcard.c_desc}}</p>
  </div>
</div>
</template>
<script>
import interact from "interactjs";

const ACCEPT_CARD = "cardAccepted";
const REJECT_CARD = "cardRejected";
const SKIP_CARD = "cardSkipped";

export default {
  static: {
    interactMaxRotation: 15,
    interactOutOfSightXCoordinate: 500,
    interactOutOfSightYCoordinate: 600,
    interactYThreshold: 150,
    interactXThreshold: 100
  },
  data() {
    return{
      isShowing: true,
      interactPosition: {
        x: 0,
        y: 0
      },
      /*
      c_img: 'elon',
      c_title: 'Tesla Inc',
      c_ticker: 'TSLA',
      c_price: 816.04,
      c_pct: 3,
      c_sym: 0,
      c_desc:"Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid scale, solar panels and solar roof tiles, as well as other related products and services. ",
      */
    };
  },
  props: {
    stcard: {
      type: Object,
      required: true
    },
    isCurrent: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    transformString() {
      const { x, y } = this.interactPosition;
      return `translate3D(${x}px, ${y}px, 0)`;
    }
  },
  mounted() {
    const element = this.$refs.interactElement;

    interact(element).draggable({
      onstart: () => {
        this.isInteractAnimating = false;
      },

      onmove: event => {
        const {
          interactMaxRotation,
          interactXThreshold
        } = this.$options.static;
        const x = this.interactPosition.x + event.dx;
        const y = this.interactPosition.y + event.dy;

        let rotation = interactMaxRotation * (x / interactXThreshold);

        if (rotation > interactMaxRotation) rotation = interactMaxRotation;
        else if (rotation < -interactMaxRotation)
        rotation = -interactMaxRotation;

        this.interactSetPosition({ x, y, rotation });
      },

      onend: () => {
        const { x, y } = this.interactPosition;
        const { interactXThreshold, interactYThreshold } = this.$options.static;
        this.isInteractAnimating = true;

        if (x > interactXThreshold) this.playCard(ACCEPT_CARD);
        else if (x < -interactXThreshold) this.playCard(REJECT_CARD);
        else if (y > interactYThreshold) this.playCard(SKIP_CARD);
        else this.resetCardPosition();
      }
    });
  },

  beforeUnmount() {
    interact(this.$refs.interactElement).unset();
  },
  methods:{
    getPath(image) {
      return require('@/assets/' + image );
    },
    hideCard() {
      setTimeout(() => {
        this.isShowing = false;
        this.$emit("hideCard", this.stcard);
      }, 300);
    },

    playCard(interaction) {
      const {
        interactOutOfSightXCoordinate,
        interactOutOfSightYCoordinate,
        interactMaxRotation
      } = this.$options.static;

      this.interactUnsetElement();

      switch (interaction) {
        case ACCEPT_CARD:
        this.interactSetPosition({
          x: interactOutOfSightXCoordinate,
          rotation: interactMaxRotation
        });
        this.$emit(ACCEPT_CARD);
        break;
        case REJECT_CARD:
        this.interactSetPosition({
          x: -interactOutOfSightXCoordinate,
          rotation: -interactMaxRotation
        });
        this.$emit(REJECT_CARD);
        break;
        case SKIP_CARD:
        this.interactSetPosition({
          y: interactOutOfSightYCoordinate
        });
        this.$emit(SKIP_CARD);
        break;
      }

      this.hideCard();
    },

    interactSetPosition(coordinates) {
      const { x = 0, y = 0, rotation = 0 } = coordinates;
      this.interactPosition = { x, y, rotation };
    },

    interactUnsetElement() {
      interact(this.$refs.interactElement).unset();
      this.isInteractDragged = true;
    },

    resetCardPosition() {
      this.interactSetPosition({ x: 0, y: 0, rotation: 0 });
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";

$cardsTotal: 3;
$cardsWidth: 300px;
$cardsPositionOffset: 55vh * 0.06;
$cardsScaleOffset: 0.08;
$defaultTranslation: $cardsPositionOffset * $cardsTotal;
$defaultScale: 1 - ($cardsScaleOffset * $cardsTotal);

.stcard {
  @include stcard();
  @include absolute(0);
  @include sizing(100% 80vw);
  @include flex-center();

  @include after() {
    @include sizing(21px 3px);
    @include absolute(right 0 bottom 11px left 0);

    margin: auto;
    border-radius: 100px;
    background: rgba($c-black, 0.3);
  }

  display: flex;
  max-height: 620px;
  margin: auto;
  font-size: $fs-h2;
  font-weight: $fw-bold;
  color: $c-white;
  background-color:  $primary-bg;
  opacity: 0;
  transform: translateY($defaultTranslation) scale($defaultScale);
  transform-origin: 50%, 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  user-select: none;
  pointer-events: none;
  will-change: transform, opacity;

  height: 100vw;

  &.isCurrent {
    pointer-events: auto;
  }

  &.isAnimating {
    transition: transform 0.7s $ease-out-back;
  }
}

@for $i from 1 through $cardsTotal {
  $index: $i - 1;
  $translation: $cardsPositionOffset * $index;
  $scale: 1 - ($cardsScaleOffset * $index);

  .card:nth-child(#{$i}) {
    z-index: $cardsTotal - $index;
    opacity: 1;
    transform: translateY($translation) scale($scale);

    @if $i == 3 {
      color: $c-red-25;
      background-color: $c-red-25;
    } @else if $i == 2 {
      color: $c-red-50;
      background-color: $c-red-50;
    }

    @if $i != 1 {
      background-image: none;
      @include after() {
        @include sizing(0 0);
      }
    }
  }
}
</style>
