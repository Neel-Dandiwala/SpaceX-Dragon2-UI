<template>
  <body>
    <div id="back-box"></div>
    <div class="controls-panel">
      <p
        class="controls"
        style="right: 0%; color: white; top: 10%; border-bottom: 1px solid rgba(255,255,255,0.5); padding-right: 2.5%;"
      >
        FLIGHT COMMANDS
      </p>
      <p style="top: 20%;" class="controls">WASD - Move</p>
      <p style="top: 25%;" class="controls">R | F - UP | DOWN</p>
      <p style="top: 30%;" class="controls">Q | E - ROLL</p>
      <p style="top: 35%;" class="controls">🡡 | 🡣 - PITCH</p>
      <p style="top: 40%;" class="controls">🡠 | 🡢 - YAW</p>
      <p
        class="controls"
        style="right: 0%; color: white; top: 50%; border-bottom: 1px solid rgba(255,255,255,0.5); padding-right: 5%;"
      >
        ALERT ACTIVITY
      </p>
      <p style="top: 60%;" class="controls">
        Keep an eye out for <br />
        the Easter Eggs<br />
        hidden in space!
      </p>
    </div>
    <div id="space" ref="canvas1"></div>
    <div id="hud-darken">
      <img class="hud-darken-ring" src="../assets/hud-darken.png" />
    </div>
    <div id="hud-ring">
      <img id="hud-white-outer" src="../assets/hud-ring.png" />
      <img id="hud-white-inner" src="../assets/hud-ring-inner.png" />
      <!-- Animation for A, D, R, F -->
      <div
        class="arrow"
        style="top: 55%; left: 48.25%; transform: scale(0.5) rotate(0deg)"
        v-if="animationTrigger === 70"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        class="arrow"
        style="top: 42%; left: 35%; transform: scale(0.5) rotate(90deg)"
        v-if="animationTrigger === 65"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        class="arrow"
        style="top: 27.5%; left: 48.25%; transform: scale(0.5) rotate(180deg)"
        v-if="animationTrigger === 82"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        class="arrow"
        style="top: 42%; left: 62.5%; transform: scale(0.5) rotate(270deg)"
        v-if="animationTrigger === 68"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Animation for W -->
      <div
        class="arrow"
        style="top: 35%; left: 33%; transform: scale(0.5) rotate(315deg)"
        v-if="animationTrigger === 87"
      >
        <span></span>
      </div>
      <div
        class="arrow"
        style="top: 35%; left: 63%; transform: scale(0.5) rotate(45deg)"
        v-if="animationTrigger === 87"
      >
        <span></span>
      </div>
      <div
        class="arrow"
        style="top: 65%; left: 33%; transform: scale(0.5) rotate(225deg)"
        v-if="animationTrigger === 87"
      >
        <span></span>
      </div>
      <div
        class="arrow"
        style="top: 65%; left: 63%; transform: scale(0.5) rotate(135deg)"
        v-if="animationTrigger === 87"
      >
        <span></span>
      </div>

      <!-- Animation for S -->
      <div
        class="arrow"
        style="top: 60%; left: 58%; transform: scale(0.5) rotate(315deg)"
        v-if="animationTrigger === 83"
      >
        <span></span>
      </div>
      <div
        class="arrow"
        style="top: 60%; left: 38%; transform: scale(0.5) rotate(45deg)"
        v-if="animationTrigger === 83"
      >
        <span></span>
      </div>
      <div
        class="arrow"
        style="top: 40%; left: 58%; transform: scale(0.5) rotate(225deg)"
        v-if="animationTrigger === 83"
      >
        <span></span>
      </div>
      <div
        class="arrow"
        style="top: 40%; left: 38%; transform: scale(0.5) rotate(135deg)"
        v-if="animationTrigger === 83"
      >
        <span></span>
      </div>

      <!-- Rotation Perspective Animation -->
      <div
        class="rotateWrapper"
        style="transform: translate(-50%, -50%) rotate(90deg);"
      >
        <div id="rotateAnimObject" v-if="animationTrigger === 39"></div>
      </div>
      <div
        class="rotateWrapper"
        style="transform: translate(-50%, -50%) rotate(180deg);"
      >
        <div id="rotateAnimObject" v-if="animationTrigger === 40"></div>
      </div>
      <div
        class="rotateWrapper"
        style="transform: translate(-50%, -50%) rotate(270deg);"
      >
        <div id="rotateAnimObject" v-if="animationTrigger === 37"></div>
      </div>
      <div
        class="rotateWrapper"
        style="transform: translate(-50%, -50%) rotate(0deg);"
      >
        <div id="rotateAnimObject" v-if="animationTrigger === 38"></div>
      </div>

      <!-- For E and Q -->
      <div
        class="rotateWrapper"
        style="transform: translate(-50%, -50%) rotate(0deg);"
      >
        <div id="rotateQ" v-if="animationTrigger === 81"></div>
      </div>
      <div
        class="rotateWrapper"
        style="transform: translate(-50%, -50%) rotate(0deg);"
      >
        <div id="rotateE" v-if="animationTrigger === 69"></div>
      </div>

      <div class="hud-measures">
        <p class="hud-number" id="yaw-number">{{ yaw }}°</p>
        <p class="hud-number" id="roll-number">{{ roll }}°</p>
        <p class="hud-number" id="pitch-number">{{ pitch }}°</p>
        <p class="hud-minor-number" style="top: 47%;" id="xyz-number">
          {{ x }}m
        </p>
        <p class="hud-minor-number" style="top: 50%;" id="xyz-number">
          {{ y }}m
        </p>
        <p class="hud-minor-number" style="top: 53%;" id="xyz-number">
          {{ z }}m
        </p>
        <p id="hud-title" style="top: 96%; left: 50%;">YAW</p>
        <p
          id="hud-title"
          style="font-size: min(0.3vw, 0.7vh); text-align: center; top: 50%; left: 95.5%;"
        >
          P<br />I<br />T<br />C<br />H
        </p>
        <p id="hud-title" style="top: 4.5%; left: 50%;">ROLL</p>
        <p id="hud-title" style="text-align: center; top: 50%; left: 4.5%;">
          X<br />Y<br />Z
        </p>
        <p
          class="hud-minor-number"
          style="top: 90%; left: 50%"
          :style="{ color: yawColor }"
          id="live-number"
        >
          {{ yawLive }}°/s
        </p>
        <p
          class="hud-minor-number"
          style="top: 55%; left: 86%"
          :style="{ color: pitchColor }"
          id="live-number"
        >
          {{ pitchLive }}°/s
        </p>
        <p
          class="hud-minor-number"
          style="top: 17.5%; left: 50%"
          :style="{ color: rollColor }"
          id="live-number"
        >
          {{ rollLive }}°/s
        </p>

        <p id="hud-title" style="top: 72%; left: 25%;">RANGE</p>
        <p
          class="hud-minor-number"
          style="top: 77%; left: 25%; "
          id="xyz-number"
        >
          {{ rangeDistance }}m
        </p>
        <p id="hud-title" style="top: 72%; left: 75%;">RATE</p>
        <p
          class="hud-minor-number"
          style="top: 77%; left: 75%; "
          id="xyz-number"
        >
          {{ rateValue }}m/s
        </p>
        <div class="yaw-measure" style="text-align: center;">
          <svg
            class="hud-circle-svg"
            id="yaw-svg"
            viewBox="0 0 150 150"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="cut-off-yaw-left">
                <path
                  d="M75,75 L30,150 64,150 75,127.5  Z"
                  fill="transparent"
                  stroke="#ff0000"
                  stroke-width="1.5"
                />
              </clipPath>
              <clipPath id="cut-off-yaw-right">
                <path
                  d="M75,75 L75,127.5 86,150 120,150 Z"
                  fill="transparent"
                  stroke="#ff0000"
                  stroke-width="1.5"
                />
              </clipPath>
            </defs>

            <circle
              class="animation-yaw"
              r="70"
              cx="75"
              cy="75"
              fill="transparent"
              stroke-dasharray="500"
              stroke-dashoffset="0"
              :clip-path="yawLR"
            ></circle>
            <circle
              class="animation-yaw"
              style=""
              r="70"
              cx="75"
              cy="75"
              fill="transparent"
              stroke-dasharray="500"
              stroke-dashoffset="0"
              :clip-path="yawLR"
            ></circle>
          </svg>
        </div>
        <div class="pitch-measure" style="text-align: center;">
          <svg
            class="hud-circle-svg"
            id="pitch-svg"
            viewBox="0 0 150 150"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="cut-off-pitch-up">
                <path
                  d="M75,75 L150,30 150,64 127.5,75 Z"
                  fill="transparent"
                  stroke="#ff0000"
                  stroke-width="1.5"
                />
              </clipPath>
              <clipPath id="cut-off-pitch-down">
                <path
                  d="M75,75 L127.5,75 150,86 150,120 Z"
                  fill="transparent"
                  stroke="#ff0000"
                  stroke-width="1.5"
                />
              </clipPath>
            </defs>

            <circle
              class="animation-pitch"
              r="70"
              cx="75"
              cy="75"
              fill="transparent"
              stroke-dasharray="500"
              stroke-dashoffset="0"
              :clip-path="pitchLR"
            ></circle>
            <circle
              class="animation-pitch"
              style=""
              r="70"
              cx="75"
              cy="75"
              fill="transparent"
              stroke-dasharray="500"
              stroke-dashoffset="0"
              :clip-path="pitchLR"
            ></circle>
          </svg>
        </div>
        <div class="roll-measure" style="text-align: center;">
          <svg
            class="hud-circle-svg"
            id="roll-svg"
            viewBox="0 0 150 150"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="cut-off-roll-left">
                <path
                  d="M75,75 L30,0 64,0 75,22.5 Z"
                  fill="transparent"
                  stroke="#ff0000"
                  stroke-width="1.5"
                />
              </clipPath>
              <clipPath id="cut-off-roll-right">
                <path
                  d="M75,75 L75,22.5 86,0 120,0 Z"
                  fill="transparent"
                  stroke="#ff0000"
                  stroke-width="1.5"
                />
              </clipPath>
            </defs>
            <circle
              class="animation-roll"
              r="70"
              cx="75"
              cy="75"
              fill="transparent"
              stroke-dasharray="500"
              stroke-dashoffset="0"
              :clip-path="rollLR"
            ></circle>
            <circle
              class="animation-roll"
              style=""
              r="70"
              cx="75"
              cy="75"
              fill="transparent"
              stroke-dasharray="500"
              stroke-dashoffset="0"
              :clip-path="rollLR"
            ></circle>
          </svg>
        </div>
      </div>
    </div>

    <div id="navball" ref="canvas2"></div>

    <div class="corner-circles-base">
      <svg id="lower-left" width="200" height="200" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="white"
          stroke-width="0.5"
          fill="#020738"
        />
      </svg>
      <svg id="lower-right" width="200" height="200" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="white"
          stroke-width="0.5"
          fill="#020738"
        />
      </svg>
      <svg id="upper-left" width="200" height="200" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="white"
          stroke-width="0.5"
          fill="#020738"
        />
      </svg>
      <svg id="upper-right" width="200" height="200" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="49"
          stroke="white"
          stroke-width="0.5"
          fill="#020738"
        />
      </svg>
    </div>

    <div class="circular-progress" style="text-align: center;">
      <svg
        class="circle-big-svg"
        id="meter-svg"
        viewBox="0 0 150 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="cut-off-acceleration">
            <path
              d="M0,0 L150,0 150,25 25,150 0,150 Z"
              fill="transparent"
              stroke="#ff0000"
              stroke-width="1.5"
            />
          </clipPath>
        </defs>
        <circle
          r="70"
          cx="75"
          cy="75"
          stroke="#777777"
          stroke-width="1.5"
          stroke-dasharray="0 4"
          stroke-linecap="round"
          fill="transparent"
          clip-path="url(#cut-off-acceleration)"
        />
        <circle
          class="animation-circle"
          r="70"
          cx="75"
          cy="75"
          fill="transparent"
          v-bind:style="{ animationDuration: 1 + 's' }"
          stroke-dasharray="500"
          stroke-dashoffset="0"
          clip-path="url(#cut-off-acceleration)"
        ></circle>
        <circle
          class="animation-circle"
          style="stroke: #d7b733;"
          v-bind:style="{ animationDuration: 1 + 's' }"
          r="70"
          cx="75"
          cy="75"
          fill="transparent"
          stroke-dasharray="500"
          stroke-dashoffset="0"
          clip-path="url(#cut-off-acceleration)"
        ></circle>
      </svg>
    </div>

    <div class="progress-headings" id="progress-headings">
      <p id="main-circular-heading">ACCELERATION</p>
      <p id="number-circular-heading" class="c1">{{ accelerationValue }}g</p>
    </div>

    <div class="upper-right-ring">
      <svg
        class="upper-right-ringClass"
        id="upper-right-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style="stop-color:rgba(255,255,255, 1);stop-opacity:1"
            />
            <stop
              offset="100%"
              style="stop-color:rgba(255,255,255,0);stop-opacity:1"
            />
          </linearGradient>
        </defs>

        <path
          id="upper-right-svg-path"
          d="M 9.6 10.1 A 2 2 90 1 1 6.4 5.7 A 2 2 90 1 1 9.6 10.1 Z M 9.9 10.5 A 3 3 90 1 0 6.1 5.3 A 3 3 90 1 0 9.9 10.5 Z M 8 13.5 A 5 5 0 1 1 8 2.5 A 5 5 0 0 1 8 13.5 Z M 8 14 A 6 6 0 1 0 8 2 A 6 6 0 0 0 8 14 Z M 10.4 2.5 Q 11.3 2.7 11.7 2.3 L 14.2 5.1 Q 13.7 5.4 13.8 6.5 Q 13.1 3.8 10.4 2.5 M 5.6 2.5 Q 4.6 2.8 4.3 2.3 L 1.8 5.1 Q 2.3 5.4 2.2 6.5 Q 3 3.7 5.6 2.5 M 2.2 9.6 Q 2.3 10.4 1.8 10.9 L 4.3 13.7 Q 4.7 13.3 5.6 13.5 Q 3.1 12.4 2.2 9.6 M 13.8 9.6 Q 13.8 10.6 14.3 10.9 L 11.7 13.8 Q 11.3 13.4 10.4 13.5 Q 13.1 12.2 13.8 9.6 Z M 6.5 6.5 A 1 1 0 0 0 6.5 7.5 A 1 1 0 0 0 7.5 7.5 A 1 1 0 0 0 7.5 6.5 A 1 1 0 0 0 6.5 6.5 M 9.5 6.5 A 1 1 0 0 0 8.5 6.5 A 1 1 0 0 0 8.5 7.5 A 1 1 0 0 0 9.5 7.5 A 1 1 0 0 0 9.5 6.5 M 9.5 9.5 A 1 1 0 0 0 9.5 8.5 A 1 1 0 0 0 8.5 8.5 A 1 1 0 0 0 8.5 9.5 A 1 1 0 0 0 9.5 9.5 M 6.5 8.5 A 1 1 0 0 0 6.5 9.5 A 1 1 0 0 0 7.5 9.5 A 1 1 0 0 0 7.5 8.5 A 1 1 0 0 0 6.5 8.5 M 4.5 4.4 A 1 1 0 0 0 3.8 5.2 A 1 1 0 0 0 4.5 5.8 A 1 1 0 0 0 5.2 5.1 A 1 1 0 0 0 4.5 4.4 M 11.5 4.4 A 1 1 0 0 0 10.8 5 A 1 1 0 0 0 11.5 5.8 A 1 1 0 0 0 12.2 5.3 A 1 1 0 0 0 11.5 4.4 M 12.2 10.5 A 1 1 0 0 0 11.5 9.9 A 1 1 0 0 0 10.9 10.6 A 1 1 0 0 0 11.7 11.2 A 1 1 0 0 0 12.2 10.5 M 3.7 10.5 A 1 1 0 0 0 4.4 11.5 A 1 1 0 0 0 5.2 10.9 A 1 1 0 0 0 4.5 10 A 1 1 0 0 0 3.7 10.5"
        />

        <path
          fill="url(#grad2)"
          fill-rule="evenodd"
          v-if="currentMajorKey === 87"
          id="upper-left-indicator-svg-path"
          d="M 7.022 1.566 a 1.13 1.13 0 0 1 1.96 0 l 4.018 11.434 c 0.457 0.778 -0.092 1.767 -0.98 1.767 H 4 c -0.889 0 -1.437 -0.99 -1.144 -2 L 7.022 1.566 z M 5 3 A 1 1 0 0 0 4 2 L 1 4 A 1 1 0 0 0 1 5 L 2 8 A 1 1 0 0 0 3 8 Z M 12 2 A 1 1 0 0 0 11 3 L 13 8 A 1 1 0 0 0 14 8 L 15 5 A 1 1 0 0 0 15 4 Z"
        />
        <path
          fill="url(#grad2)"
          fill-rule="evenodd"
          v-if="currentMajorKey === 68"
          id="upper-right-indicator-svg-path"
          d="M 7.022 1.566 a 1.13 1.13 0 0 1 1.96 0 l 4.018 11.434 c 0.457 0.778 -0.092 1.767 -0.98 1.767 H 4 c -0.889 0 -1.437 -0.99 -1.144 -2 L 7.022 1.566 z M 5 3 A 1 1 0 0 0 4 2 L 1 4 A 1 1 0 0 0 1 5 L 2 8 A 1 1 0 0 0 3 8 Z M 12 2 A 1 1 0 0 0 11 3 L 13 8 A 1 1 0 0 0 14 8 L 15 5 A 1 1 0 0 0 15 4 Z"
        />

        <path
          fill="url(#grad2)"
          fill-rule="evenodd"
          v-if="currentMajorKey === 65"
          id="lower-left-indicator-svg-path"
          d="M 7.022 1.566 a 1.13 1.13 0 0 1 1.96 0 l 4.018 11.434 c 0.457 0.778 -0.092 1.767 -0.98 1.767 H 4 c -0.889 0 -1.437 -0.99 -1.144 -2 L 7.022 1.566 z M 5 3 A 1 1 0 0 0 4 2 L 1 4 A 1 1 0 0 0 1 5 L 2 8 A 1 1 0 0 0 3 8 Z M 12 2 A 1 1 0 0 0 11 3 L 13 8 A 1 1 0 0 0 14 8 L 15 5 A 1 1 0 0 0 15 4 Z"
        />
        <path
          fill="url(#grad2)"
          fill-rule="evenodd"
          v-if="currentMajorKey === 83"
          id="lower-right-indicator-svg-path"
          d="M 7.022 1.566 a 1.13 1.13 0 0 1 1.96 0 l 4.018 11.434 c 0.457 0.778 -0.092 1.767 -0.98 1.767 H 4 c -0.889 0 -1.437 -0.99 -1.144 -2 L 7.022 1.566 z M 5 3 A 1 1 0 0 0 4 2 L 1 4 A 1 1 0 0 0 1 5 L 2 8 A 1 1 0 0 0 3 8 Z M 12 2 A 1 1 0 0 0 11 3 L 13 8 A 1 1 0 0 0 14 8 L 15 5 A 1 1 0 0 0 15 4 Z"
        />

        <path
          id="lower-right-indicator-inner-svg-path"
          fill-rule="evenodd"
          fill="#ffffff"
          v-if="currentArrowKey === 40"
          d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"
        />
        <path
          id="lower-left-indicator-inner-svg-path"
          fill-rule="evenodd"
          fill="#ffffff"
          v-if="currentArrowKey === 37"
          d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"
        />
        <path
          id="upper-right-indicator-inner-svg-path"
          fill-rule="evenodd"
          fill="#ffffff"
          v-if="currentArrowKey === 39"
          d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"
        />
        <path
          id="upper-left-indicator-inner-svg-path"
          fill-rule="evenodd"
          fill="#ffffff"
          v-if="currentArrowKey === 38"
          d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"
        />
      </svg>
    </div>

    <div class="lower-right-ring">
      <svg
        class="lower-right-ringClass"
        id="lower-right-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style="stop-color:rgba(255,255,255, 1);stop-opacity:1"
            />
            <stop
              offset="60%"
              style="stop-color:rgba(255,255,255,0);stop-opacity:1"
            />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="40%"
              style="stop-color:rgba(255,255,255, 0);stop-opacity:1"
            />
            <stop
              offset="100%"
              style="stop-color:rgba(255,255,255,1);stop-opacity:1"
            />
          </linearGradient>
        </defs>
        <path
          id="lower-right-svg-path"
          d="M 9 16 A 7 7 0 1 1 9 2 a 7 7 0 0 1 0 14 z m 0 1 A 8 8 0 1 0 9 1 a 8 8 0 0 0 0 16 z M 4.5 3.6 Q 5.8 4.6 7 6 Q 9 6 11 6 Q 12.2 4.7 13.3 3.5 Q 9 0.5 4.5 3.6 M 12 15.3 Q 11.5 13.6 11 11.8 Q 11.6 10.8 12.5 8.8 Q 14 8.4 15.9 8 Q 16.4 12.9 12 15.3 M 6.1 15.4 Q 6.5 13.4 7 11.7 Q 6.5 10.7 5.5 8.8 Q 3.6 8.4 2.1 8 Q 1.6 13 6.1 15.4 M 7 3.5 L 11 3.5 L 10 5.1 L 8 5.1 Z M 13 13.2 L 14.6 9.8 L 13 10 L 12.2 11.6 Z M 5 10 L 5.8 11.5 L 5 13.2 L 3.4 9.8 Z"
        />
        <path
          v-if="currentMinorKey === 82"
          fill="url(#grad1)"
          id="upper-ring-sign-svg-path"
          d="M 9 16 A 7 7 0 1 1 9 2 a 7 7 0 0 1 0 14 z m 0 1 A 8 8 0 1 0 9 1 a 8 8 0 0 0 0 16 z M 4.7 14.5"
        />
        <path
          v-if="currentMinorKey === 70"
          fill="url(#grad3)"
          id="lower-ring-sign-svg-path"
          d="M 9 16 A 7 7 0 1 1 9 2 a 7 7 0 0 1 0 14 z m 0 1 A 8 8 0 1 0 9 1 a 8 8 0 0 0 0 16 z M 4.7 14.5"
        />
        <path
          v-if="currentRollKey === 81 || currentRollKey === 69"
          id="upper-trapezium-sign-svg-path"
          fill="#ffffff"
          d="M 0.5 0.5 L 3.5 5.5 L 9.5 5.5 L 12.5 0.5 Z"
        />
        <path
          v-if="currentRollKey === 81"
          id="left-trapezium-sign-svg-path"
          fill="#ffffff"
          d="M 0.5 0.5 L 3.5 5.5 L 9.5 5.5 L 12.5 0.5 Z"
        />
        <path
          v-if="currentRollKey === 69"
          id="right-trapezium-sign-svg-path"
          fill="#ffffff"
          d="M 0.5 0.5 L 3.5 5.5 L 9.5 5.5 L 12.5 0.5 Z"
        />
      </svg>
    </div>
  </body>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// eslint-disable-next-line no-unused-vars
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js'
import atmosphereShader from '../shaders/atmosphereShader'
import luminanceShader from '../shaders/luminanceShader'
import gsap from 'gsap'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { AdaptiveToneMappingPass } from 'three/examples/jsm/postprocessing/AdaptiveToneMappingPass.js'
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js'
import { GammaCorrectionShader } from 'three/examples/jsm/shaders/GammaCorrectionShader.js'

export default {
  name: 'Second',
  props: [],
  components: {},
  data() {
    return {
      acceleration: 350,
      accelerationValue: 0.01,
      currentMajorKey: 0,
      currentMinorKey: 0,
      currentArrowKey: 0,
      currentRollKey: 0,
      rangeDistance: 0,
      rateValue: 0,
      animationTrigger: 0,
      yaw: 0.01,
      roll: 0.01,
      pitch: 0.01,
      x: 0.01,
      y: 0.01,
      z: 0.01,

      yawAnimRight: [
        -103,
        -98.64,
        -94.28,
        -89.92,
        -85.57,
        -81.21,
        -76.85,
        -72.5
      ],
      yawAnimLeft: [385, 380.28, 375.57, 370.85, 366.14, 361.42, 356.71, 352],
      yawLive: 0.0,
      yawLR: `url(#cut-off-yaw-right)` + '',
      yawStartValue: 0,
      yawGoalValue: 0,
      yawColor: `#24d2fd`,

      pitchAnimUp: [
        -434,
        -429.28,
        -424.57,
        -419.85,
        -415.14,
        -410.42,
        -405.71,
        -401
      ],
      pitchAnimDown: [495, 490.28, 485.57, 480.85, 476.14, 471.42, 466.71, 462],
      pitchLive: 0.0,
      pitchLR: `url(#cut-off-pitch-up)` + '',
      pitchStartValue: 0,
      pitchGoalValue: 0,
      pitchColor: `#24d2fd`,

      rollAnimLeft: [
        -325,
        -320.28,
        -315.57,
        -310.85,
        -306.14,
        -301.42,
        -296.71,
        -292
      ],
      rollAnimRight: [165, 160.28, 155.57, 150.85, 146.14, 141.42, 136.71, 132],
      rollLive: 0.0,
      rollLR: `url(#cut-off-roll-right)` + '',
      rollStartValue: 0,
      rollGoalValue: 0,
      rollColor: `#24d2fd`
    }
  },
  created() {
    const textureLoader = new THREE.TextureLoader()
    // eslint-disable-next-line no-unused-vars
    const gltfLoader = new GLTFLoader()
    this.clock = new THREE.Clock()
    this.miscellaneous = {
      radius: 6371,
      tilt: 0.41,
      rotationSpeed: 0.02,
      cloudsScale: 1.005
    }

    this.navSize =
      (window.innerWidth <= 1200 && window.innerWidth > 850) ||
      (window.innerHeight <= 650 && window.innerHeight > 450)
        ? 150
        : window.innerWidth < 850 || window.innerHeight < 450
        ? 100
        : 200

    this.sizes = {
      width: window.innerWidth * 0.71428571,
      height: window.innerHeight * 0.9
    }
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      5000
    )
    this.camera.position.set(700, 400, 800)
    this.cameraPosition = this.camera.position.clone()

    this.scene = new THREE.Scene()
    this.scene.add(this.camera)
    const ambientLight = new THREE.AmbientLight(0x050505)
    this.sunLight = new THREE.DirectionalLight(0xffffff, 4.0)
    this.sunLight.position.set(2, 0, 10).normalize()
    this.scene.add(ambientLight)
    this.scene.add(this.sunLight)

    const earthAtmosphereMaterial = new THREE.ShaderMaterial(atmosphereShader)
    console.log(earthAtmosphereMaterial)
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shininess: 20
    })
    textureLoader.load(
      require('../assets/earth/earth_atmos_4096.jpg'),
      function(texture) {
        earthMaterial.map = texture
        earthMaterial.map.encoding = THREE.sRGBEncoding
        earthMaterial.needsUpdate = true
      }
    )
    textureLoader.load(
      require('../assets/earth/earth_normal_2048.jpg'),
      function(texture) {
        earthMaterial.normalMap = texture
        earthMaterial.needsUpdate = true
      }
    )
    textureLoader.load(
      require('../assets/earth/earth_specular_2048.jpg'),
      function(texture) {
        earthMaterial.specularMap = texture
        earthMaterial.specularMap.encoding = THREE.sRGBEncoding
        earthMaterial.needsUpdate = true
      }
    )
    const earthLightsTexture = textureLoader.load(
      require('../assets/earth/earth_lights_2048.png')
    )
    earthLightsTexture.encoding = THREE.sRGBEncoding

    const earthLightsMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthTest: false,
      map: earthLightsTexture
    })
    const cloudsTexture = textureLoader.load(
      require('../assets/earth/earth_clouds_2048.png')
    )
    cloudsTexture.encoding = THREE.sRGBEncoding

    const earthCloudsMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      blending: THREE.NormalBlending,
      transparent: true,
      depthTest: false,
      map: cloudsTexture
    })

    const earthGeometry = new THREE.SphereBufferGeometry(600, 30, 24)

    this.earth = new THREE.Mesh(earthGeometry, earthMaterial)
    this.earth.rotation.y = 0
    this.earth.rotation.z = this.miscellaneous.tilt
    this.scene.add(this.earth)
    this.sphereLightsMesh = new THREE.Mesh(earthGeometry, earthLightsMaterial)
    this.sphereLightsMesh.rotation.y = 0
    this.sphereLightsMesh.rotation.z = this.miscellaneous.tilt
    this.scene.add(this.sphereLightsMesh)
    this.sphereCloudsMesh = new THREE.Mesh(earthGeometry, earthCloudsMaterial)
    this.sphereCloudsMesh.rotation.y = 0
    this.sphereCloudsMesh.rotation.z = this.miscellaneous.tilt
    this.scene.add(this.sphereCloudsMesh)

    this.sphereAtmosphereMesh = new THREE.Mesh(
      earthGeometry,
      earthAtmosphereMaterial
    )
    this.sphereAtmosphereMesh.scale.set(1.05, 1.05, 1.05)
    this.sphereAtmosphereMesh.rotation.y = 0
    this.sphereAtmosphereMesh.rotation.z = this.miscellaneous.tilt
    this.scene.add(this.sphereAtmosphereMesh)

    this.luminanceMaterial = new THREE.ShaderMaterial(luminanceShader)
    this.currentLuminanceMaterial = new THREE.ShaderMaterial(luminanceShader)

    const environmentMap = new THREE.CubeTextureLoader().load([
      require('../assets/milkyWay/dark-s_px.jpg'),
      require('../assets/milkyWay/dark-s_nx.jpg'),
      require('../assets/milkyWay/dark-s_py.jpg'),
      require('../assets/milkyWay/dark-s_ny.jpg'),
      require('../assets/milkyWay/dark-s_pz.jpg'),
      require('../assets/milkyWay/dark-s_nz.jpg')
    ])
    environmentMap.encoding = THREE.sRGBEncoding
    const sceneMap = new THREE.Scene()
    sceneMap.background = environmentMap
    this.scene.background = environmentMap

    this.issLocation = new THREE.Vector3(675, 420, 700)
    gltfLoader.load(
      './ISS_stationary.glb',
      gltf => {
        this.iss = gltf.scene
        this.iss.scale.set(0.25, 0.25, 0.25)
        this.iss.position.set(675, 420, 700)
        this.scene.add(this.iss)
      },
      progress => {
        console.log('ISS in progress' + progress)
      },
      error => {
        console.log('ISS crashed' + error)
      }
    )

    this.ballsGroup = new THREE.Group()

    gltfLoader.load(
      './first_ball.glb',
      gltf => {
        console.log(gltf.scene)
        const balls = gltf.scene
        balls.scale.set(0.05, 0.05, 0.05)
        balls.rotation.x = 0.9
        balls.rotation.z += this.miscellaneous.tilt
        balls.position.set(675, 420, -2000)
        this.ballsGroup.add(balls)
      },
      progress => {
        console.log('First ball in progress' + progress)
      },
      error => {
        console.log('First ball crashed' + error)
      }
    )

    gltfLoader.load(
      './second_ball.glb',
      gltf => {
        console.log(gltf.scene)
        const balls = gltf.scene
        balls.scale.set(0.05, 0.05, 0.05)
        balls.rotation.x = 0.9
        balls.rotation.z += this.miscellaneous.tilt
        balls.position.set(675, 2000, 650)
        this.ballsGroup.add(balls)
      },
      progress => {
        console.log('Second ball in progress' + progress)
      },
      error => {
        console.log('Second ball crashed' + error)
      }
    )

    gltfLoader.load(
      './third_ball.glb',
      gltf => {
        console.log(gltf.scene)
        const balls = gltf.scene
        balls.scale.set(0.05, 0.05, 0.05)
        balls.rotation.x = 0.9
        balls.rotation.z += this.miscellaneous.tilt
        balls.position.set(2000, -500, 1000)
        this.ballsGroup.add(balls)
      },
      progress => {
        console.log('Third ball in progress' + progress)
      },
      error => {
        console.log('Third ball crashed' + error)
      }
    )

    gltfLoader.load(
      './fourth_ball.glb',
      gltf => {
        console.log(gltf.scene)
        const balls = gltf.scene
        balls.scale.set(0.05, 0.05, 0.05)
        balls.rotation.x = 0.9
        balls.rotation.z += this.miscellaneous.tilt
        balls.position.set(-2000, 10, 450)
        this.ballsGroup.add(balls)
      },
      progress => {
        console.log('Fourth ball in progress' + progress)
      },
      error => {
        console.log('Fourth ball crashed' + error)
      }
    )
    gltfLoader.load(
      './fifth_ball.glb',
      gltf => {
        console.log(gltf.scene)
        const balls = gltf.scene
        balls.scale.set(0.05, 0.05, 0.05)
        balls.rotation.x = 0.9
        balls.rotation.z += this.miscellaneous.tilt
        balls.position.set(50, -2000, 150)
        this.ballsGroup.add(balls)
      },
      progress => {
        console.log('Fifth ball in progress' + progress)
      },
      error => {
        console.log('Fifth ball crashed' + error)
      }
    )
    gltfLoader.load(
      './sixth_ball.glb',
      gltf => {
        console.log(gltf.scene)
        const balls = gltf.scene
        balls.scale.set(0.05, 0.05, 0.05)
        balls.rotation.x = 0.9
        balls.rotation.z += this.miscellaneous.tilt
        balls.position.set(-150, -600, 2000)
        this.ballsGroup.add(balls)
      },
      progress => {
        console.log('Sixth ball in progress' + progress)
      },
      error => {
        console.log('Sixth ball crashed' + error)
      }
    )

    this.scene.add(this.ballsGroup)

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    // this.renderer.setClearColor(0x000000)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.autoClear = false
    this.controls = new FlyControls(this.camera, this.renderer.domElement)
    // this.controls.enableDamping = true
    this.controls.movementSpeed = 48
    this.controls.rollSpeed = Math.PI / 48
    this.controls.autoForward = false
    this.controls.dragToLook = false

    const renderTarget = new THREE.WebGLRenderTarget(
      this.sizes.width,
      this.sizes.height,
      {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat
      }
    )
    this.dynamicHDREffectComposer = new EffectComposer(
      this.renderer,
      renderTarget
    )
    this.dynamicHDREffectComposer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    )
    this.dynamicHDREffectComposer.setSize(this.sizes.width, this.sizes.height)
    const scenePass = new RenderPass(this.scene, this.camera)
    const environmentPass = new RenderPass(sceneMap, this.camera)
    scenePass.clear = false

    this.toneMapping = new AdaptiveToneMappingPass(true, 256)
    this.toneMapping.needsSwap = true
    this.bloomPass = new BloomPass()
    const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader)

    this.dynamicHDREffectComposer.addPass(environmentPass)
    this.dynamicHDREffectComposer.addPass(scenePass)
    this.dynamicHDREffectComposer.addPass(this.toneMapping)
    this.dynamicHDREffectComposer.addPass(this.bloomPass)
    this.dynamicHDREffectComposer.addPass(gammaCorrectionPass)

    this.navCamera = new THREE.PerspectiveCamera(
      25,
      this.navSize / this.navSize,
      0.1,
      100
    )
    this.navCamera.position.set(0, 0, 5)
    const navLight = new THREE.DirectionalLight('#ffffff', 0.55)
    navLight.position.set(0, 1, 4)
    const navballTexture = textureLoader.load(require('../assets/navball_edited.png'))
    this.navBall = new THREE.Mesh(
      new THREE.SphereBufferGeometry(1, 16, 16),
      new THREE.MeshStandardMaterial({
        map: navballTexture
      })
    )
    this.navBall.rotation.y = 0
    this.navBall.rotation.z = this.miscellaneous.tilt
    this.navScene = new THREE.Scene()
    this.navScene.add(this.navCamera)
    this.navScene.add(navLight)
    this.navScene.add(this.navBall)
    this.navRenderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })
    this.navRenderer.setSize(this.navSize, this.navSize)
    this.navRenderer.setPixelRatio(1)
  },

  mounted() {
    console.log(this.scene)
    this.$refs.canvas1.appendChild(this.renderer.domElement)
    this.$refs.canvas2.appendChild(this.navRenderer.domElement)
    this.animate()
    window.addEventListener('resize', this.resizeScreen)
    window.addEventListener('keydown', this.keyDown)
    window.addEventListener('keyup', this.keyUp)
    this.yawStartValue = this.yawAnimRight[0]
    this.yawGoalValue = this.yawAnimRight[0]
    this.pitchStartValue = this.pitchAnimDown[0]
    this.pitchGoalValue = this.pitchAnimDown[0]
    this.rollStartValue = this.rollAnimRight[0]
    this.rollGoalValue = this.rollAnimRight[0]
  },

  beforeUnmount() {

    this.scene = null
    this.renderer.dispose()
    this.navRenderer.dispose()
    // this.dynamicHDREffectComposer.dispose()
    console.log(this.scene)
  },
  unmount() {
    console.log('UNMOUNT UNMOUNT')
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate)
      const delta = this.clock.getDelta()
      const elapsedTime = this.clock.getElapsedTime()

      // this.renderer.render(this.scene, this.camera)
      this.navRenderer.render(this.navScene, this.navCamera)
      this.navBall.rotation.x = this.camera.rotation.x
      this.navBall.rotation.y = this.camera.rotation.y
      this.dynamicHDREffectComposer.render()
    
      if (this.bloomPass) {
        this.bloomPass.copyUniforms['opacity'].value = 1.0
      }
      if (this.toneMapping) {
        this.toneMapping.setAdaptionRate(2.0)
        this.luminanceMaterial.uniforms[
          'map'
        ].value = this.toneMapping.luminanceRT
        this.currentLuminanceMaterial.uniforms[
          'map'
        ].value = this.toneMapping.currentLuminanceRT

        this.toneMapping.setMaxLuminance(16)
        this.toneMapping.setMiddleGrey(0.04)
      }

      this.rangeDistance =
        Math.round(
          Math.sqrt(
            Math.pow(this.camera.position.x - this.issLocation.x, 2) +
              Math.pow(this.camera.position.y - this.issLocation.y, 2) +
              Math.pow(this.camera.position.z - this.issLocation.z, 2)
          ) * 100
        ) / 100
      this.rateValue =
        Math.round((this.rangeDistance / (elapsedTime * 10000)) * 10000) / 10000
      
      if (this.rangeDistance > 3500) {
        gsap.to(this.camera.position, {
          duration: 4,
          x: this.cameraPosition.x,
          y: this.cameraPosition.y,
          z: this.cameraPosition.z
        })
        this.restartScene()
      }
      this.ballsGroup.rotation.y += this.miscellaneous.rotationSpeed * delta
      this.earth.rotation.y += this.miscellaneous.rotationSpeed * delta
      this.sphereLightsMesh.rotation.y +=
        this.miscellaneous.rotationSpeed * delta
      this.sphereCloudsMesh.rotation.y +=
        1.25 * this.miscellaneous.rotationSpeed * delta
      this.sphereAtmosphereMesh.rotation.y +=
        1.25 * this.miscellaneous.rotationSpeed * delta

      const cameraPos = this.camera.position.length()
      const slowdown = cameraPos - 600 * 1.01
      this.controls.movementSpeed = 0.33 * slowdown
      this.sunLight.intensity = 4.0
      this.controls.update(delta)

      this.z = Math.round(this.camera.position.z * 100) / 100
      this.y = Math.round(this.camera.position.y * 100) / 100
      this.x = Math.round(this.camera.position.x * 100) / 100
      this.pitch = Math.round(this.camera.rotation.y * 100) / 100
      this.yaw = Math.round(this.camera.rotation.x * 100) / 100
      this.roll = Math.round(this.camera.rotation.z * 100) / 100
      this.acceleration = this.acceleration > 350 ? 350 : this.acceleration + 1
      this.accelerationValue =
        Math.round(
          (this.accelerationValue > 350
            ? 345.0
            : this.accelerationValue > 0.01
            ? this.accelerationValue - 1
            : 0.01) * 100
        ) / 100
      // const fixed = new THREE.Vector3(40, 5, 20)
      // this.ring.position.sub(this.camera.position, fixed)
      // this.ring.rotation.y += 0.1
      // console.log(this.ring.position)
    },
    resizeScreen(e) {
      this.sizes.width = e.target.innerWidth * 0.71426571
      this.sizes.height = e.target.innerHeight * 0.9

      this.camera.aspect = this.sizes.width / this.sizes.height
      this.camera.updateProjectionMatrix()

      this.renderer.setSize(this.sizes.width, this.sizes.height)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      console.log(this.navSize)
      this.navSize = 200
      if (
        (e.target.innerWidth <= 1200 && e.target.innerWidth > 850) ||
        (e.target.innerHeight <= 650 && e.target.innerHeight > 450)
      ) {
        this.navSize = 150
        console.log(this.navSize + 'FIRST')
      }
      if (e.target.innerWidth < 850 || e.target.innerHeight < 450) {
        this.navSize = 100
        console.log(this.navSize + 'SECOND')
      }
      console.log(this.navSize + 'FINAL')
      this.navCamera.aspect = this.navSize / this.navSize
      this.navCamera.updateProjectionMatrix()

      this.navRenderer.setSize(this.navSize, this.navSize)
      this.navRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    },
    restartScene() {
      this.acceleration = 350
      this.accelerationValue = 0.01
      this.currentMajorKey = 0
      this.currentMinorKey = 0
      this.currentArrowKey = 0
      this.currentRollKey = 0
      this.rangeDistance = 0
      this.rateValue = 0
      this.animationTrigger = 0
      this.yaw = 0.01
      this.roll = 0.01
      this.pitch = 0.01
      this.x = 0.01
      this.y = 0.01
      this.z = 0.01

      this.yawLive = 0.0
      this.yawLR = `url(#cut-off-yaw-right)` + ''

      this.yawColor = `#24d2fd`
      this.pitchLive = 0.0
      this.pitchLR = `url(#cut-off-pitch-up)` + ''

      this.pitchColor = `#24d2fd`
      this.rollLive = 0.0
      this.rollLR = `url(#cut-off-roll-right)` + ''

      this.rollColor = `#24d2fd`
      this.yawStartValue = this.yawAnimRight[0]
      this.yawGoalValue = this.yawAnimRight[0]
      this.pitchStartValue = this.pitchAnimDown[0]
      this.pitchGoalValue = this.pitchAnimDown[0]
      this.rollStartValue = this.rollAnimRight[0]
      this.rollGoalValue = this.rollAnimRight[0]
      
    },

    yawSelection(keyCode) {
      if (keyCode === 39) {
        this.yawLive = Math.round((this.yawLive + 0.1) * 10) / 10
      }
      if (keyCode === 37) {
        this.yawLive = Math.round((this.yawLive - 0.1) * 10) / 10
      }
      // console.log(this.yawLive + 'LIVEEE')
      switch (this.yawLive) {
        case 0.7:
          this.yawGoalValue = this.yawAnimRight[7]
          this.yawLR = 'url(#cut-off-yaw-right)'
          this.yawColor = `#ff0000`
          break
        case 0.6:
          this.yawGoalValue = this.yawAnimRight[6]
          this.yawColor = `#ffa500`
          break
        case 0.5:
          this.yawGoalValue = this.yawAnimRight[5]
          this.yawColor = `#ffa500`
          break
        case 0.4:
          this.yawGoalValue = this.yawAnimRight[4]
          this.yawColor = `#24d2fd`
          break
        case 0.3:
          this.yawGoalValue = this.yawAnimRight[3]
          break
        case 0.2:
          this.yawGoalValue = this.yawAnimRight[2]
          break
        case 0.1:
          this.yawGoalValue = this.yawAnimRight[1]
          this.yawStartValue = this.yawAnimRight[0]
          this.yawLR = 'url(#cut-off-yaw-right)'
          this.yawColor = `#24d2fd`
          break
        case 0:
          this.yawLR = 'url(#cut-off-yaw-right)'
          this.yawGoalValue = -103
          break
        case -0.1:
          this.yawStartValue = this.yawAnimLeft[0]
          this.yawGoalValue = this.yawAnimLeft[1]
          this.yawLR = 'url(#cut-off-yaw-left)'
          this.yawColor = `#24d2fd`
          break
        case -0.2:
          this.yawGoalValue = this.yawAnimLeft[2]
          break
        case -0.3:
          this.yawGoalValue = this.yawAnimLeft[3]
          break
        case -0.4:
          this.yawGoalValue = this.yawAnimLeft[4]
          this.yawColor = `#24d2fd`
          break
        case -0.5:
          this.yawGoalValue = this.yawAnimLeft[5]
          this.yawColor = `#ffa500`
          break
        case -0.6:
          this.yawGoalValue = this.yawAnimLeft[6]
          this.yawColor = `#ffa500`
          break
        case -0.7:
          this.yawGoalValue = this.yawAnimLeft[7]
          this.yawLR = 'url(#cut-off-yaw-left)'
          this.yawColor = `#ff0000`
          break
      }
    },
    pitchSelection(keyCode) {
      if (keyCode === 40) {
        this.pitchLive = Math.round((this.pitchLive + 0.1) * 10) / 10
      }
      if (keyCode === 38) {
        this.pitchLive = Math.round((this.pitchLive - 0.1) * 10) / 10
      }
      console.log(this.pitchLive + 'LIVEEE')
      switch (this.pitchLive) {
        case 0.7:
          this.pitchGoalValue = this.pitchAnimDown[7]
          this.pitchLR = 'url(#cut-off-pitch-down)'
          this.pitchColor = `#ff0000`
          break
        case 0.6:
          this.pitchGoalValue = this.pitchAnimDown[6]
          this.pitchColor = `#ffa500`
          break
        case 0.5:
          this.pitchGoalValue = this.pitchAnimDown[5]
          this.pitchColor = `#ffa500`
          break
        case 0.4:
          this.pitchGoalValue = this.pitchAnimDown[4]
          this.pitchColor = `#24d2fd`
          break
        case 0.3:
          this.pitchGoalValue = this.pitchAnimDown[3]
          break
        case 0.2:
          this.pitchGoalValue = this.pitchAnimDown[2]
          break
        case 0.1:
          this.pitchGoalValue = this.pitchAnimDown[1]
          this.pitchStartValue = this.pitchAnimDown[0]
          this.pitchLR = 'url(#cut-off-pitch-down)'
          this.pitchColor = `#24d2fd`
          break
        case 0:
          this.pitchLR = 'url(#cut-off-pitch-down)'
          this.pitchGoalValue = -434
          break
        case -0.1:
          this.pitchStartValue = this.pitchAnimUp[0]
          this.pitchGoalValue = this.pitchAnimUp[1]
          this.pitchLR = 'url(#cut-off-pitch-up)'
          this.pitchColor = `#24d2fd`
          break
        case -0.2:
          this.pitchGoalValue = this.pitchAnimUp[2]
          break
        case -0.3:
          this.pitchGoalValue = this.pitchAnimUp[3]
          break
        case -0.4:
          this.pitchGoalValue = this.pitchAnimUp[4]
          this.pitchColor = `#24d2fd`
          break
        case -0.5:
          this.pitchGoalValue = this.pitchAnimUp[5]
          this.pitchColor = `#ffa500`
          break
        case -0.6:
          this.pitchGoalValue = this.pitchAnimUp[6]
          this.pitchColor = `#ffa500`
          break
        case -0.7:
          this.pitchGoalValue = this.pitchAnimUp[7]
          this.pitchLR = 'url(#cut-off-pitch-up)'
          this.pitchColor = `#ff0000`
          break
      }
    },
    rollSelection(keyCode) {
      if (keyCode === 69) {
        this.rollLive = Math.round((this.rollLive + 0.1) * 10) / 10
      }
      if (keyCode === 81) {
        this.rollLive = Math.round((this.rollLive - 0.1) * 10) / 10
      }
      // console.log(this.yawLive + 'LIVEEE')
      switch (this.rollLive) {
        case 0.7:
          this.rollGoalValue = this.rollAnimRight[7]
          this.rollLR = 'url(#cut-off-roll-right)'
          this.rollColor = `#ff0000`
          break
        case 0.6:
          this.rollGoalValue = this.rollAnimRight[6]
          this.rollColor = `#ffa500`
          break
        case 0.5:
          this.rollGoalValue = this.rollAnimRight[5]
          this.rollColor = `#ffa500`
          break
        case 0.4:
          this.rollGoalValue = this.rollAnimRight[4]
          this.rollColor = `#24d2fd`
          break
        case 0.3:
          this.rollGoalValue = this.rollAnimRight[3]
          break
        case 0.2:
          this.rollGoalValue = this.rollAnimRight[2]
          break
        case 0.1:
          this.rollGoalValue = this.rollAnimRight[1]
          this.rollStartValue = this.rollAnimRight[0]
          this.rollLR = 'url(#cut-off-roll-right)'
          this.rollColor = `#24d2fd`
          break
        case 0:
          this.rollLR = 'url(#cut-off-roll-right)'
          this.rollGoalValue = 165
          break
        case -0.1:
          this.rollStartValue = this.rollAnimLeft[0]
          this.rollGoalValue = this.rollAnimLeft[1]
          this.rollLR = 'url(#cut-off-roll-left)'
          this.rollColor = `#24d2fd`
          break
        case -0.2:
          this.rollGoalValue = this.rollAnimLeft[2]
          break
        case -0.3:
          this.rollGoalValue = this.rollAnimLeft[3]
          break
        case -0.4:
          this.rollGoalValue = this.rollAnimLeft[4]
          this.rollColor = `#24d2fd`
          break
        case -0.5:
          this.rollGoalValue = this.rollAnimLeft[5]
          this.rollColor = `#ffa500`
          break
        case -0.6:
          this.rollGoalValue = this.rollAnimLeft[6]
          this.rollColor = `#ffa500`
          break
        case -0.7:
          this.rollGoalValue = this.rollAnimLeft[7]
          this.rollLR = 'url(#cut-off-roll-left)'
          this.rollColor = `#ff0000`
          break
      }
    },

    keyDown(e) {
      this.acceleration = this.acceleration < 100 ? 100 : this.acceleration - 10
      this.accelerationValue = this.accelerationValue + 10.03
      console.log(e.keyCode)
      switch (e.keyCode) {
        case 65:
          console.log('A')
          this.currentMajorKey = 65
          this.animationTrigger = 65
          break
        case 87:
          console.log('W')
          this.currentMajorKey = 87
          this.animationTrigger = 87
          break
        case 83:
          console.log('S')
          this.currentMajorKey = 83
          this.animationTrigger = 83
          break
        case 68:
          console.log('D')
          this.currentMajorKey = 68
          this.animationTrigger = 68
          break
        case 82:
          console.log('R')
          this.currentMinorKey = 82
          this.animationTrigger = 82
          break
        case 70:
          console.log('F')
          this.currentMinorKey = 70
          this.animationTrigger = 70
          // this.removeAnimTrigger()
          break
        case 81:
          console.log('Q')
          this.currentRollKey = 81
          this.rollSelection(81)
          this.animationTrigger = 81
          break
        case 69:
          console.log('E')
          this.currentRollKey = 69
          this.rollSelection(69)
          this.animationTrigger = 69
          break
        case 37:
          console.log('🡠')
          this.currentArrowKey = 37
          this.yawSelection(37)
          this.animationTrigger = 37
          break
        case 38:
          console.log('🡡')
          this.currentArrowKey = 38
          this.pitchSelection(38)
          this.animationTrigger = 38
          break
        case 39:
          console.log('🡢')
          this.currentArrowKey = 39
          this.yawSelection(39)
          this.animationTrigger = 39
          break
        case 40:
          console.log('🡣')
          this.currentArrowKey = 40
          this.pitchSelection(40)
          this.animationTrigger = 40
          break
      }
    },
    keyUp() {
      this.currentMajorKey = 0
      this.currentArrowKey = 0
      this.currentMinorKey = 0
      this.currentRollKey = 0
      setTimeout(() => {
        this.animationTrigger = 0
      }, 550)
    },
    disposeNode(node) {
      if (node instanceof THREE.Mesh) {
        if (node.geometry) {
          node.geometry.dispose()
          node.geometry = undefined // fixed problem
        }

        if (node.material) {
          if (
            node.material instanceof THREE.MeshFaceMaterial ||
            node.material instanceof THREE.MultiMaterial
          ) {
            // eslint-disable-next-line no-unused-vars
            node.material.materials.forEach(function(mtrl, idx) {
              if (mtrl.map) mtrl.map.dispose()
              if (mtrl.lightMap) mtrl.lightMap.dispose()
              if (mtrl.bumpMap) mtrl.bumpMap.dispose()
              if (mtrl.normalMap) mtrl.normalMap.dispose()
              if (mtrl.specularMap) mtrl.specularMap.dispose()
              if (mtrl.envMap) mtrl.envMap.dispose()

              mtrl.dispose()
              mtrl = undefined // fixed problem
            })
          } else {
            if (node.material.map) node.material.map.dispose()
            if (node.material.lightMap) node.material.lightMap.dispose()
            if (node.material.bumpMap) node.material.bumpMap.dispose()
            if (node.material.normalMap) node.material.normalMap.dispose()
            if (node.material.specularMap) node.material.specularMap.dispose()
            if (node.material.envMap) node.material.envMap.dispose()

            node.material.dispose()
            node.material = undefined // fixed problem
          }
        }
        console.log('node before removal: ', node)
        this.scene.remove(node)
        this.renderer.dispose() 
        node = undefined 
      }
    },
    disposeHierarchy(node, callback) {
      for (var i = node.children.length - 1; i >= 0; i--) {
        var child = node.children[i]
        this.disposeHierarchy(child, callback)
        callback(child)
      }
    }
  },
  beforeRouteUpdate() {},
  computed: {}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#space {
  /* height: 100%; */
  /* width: 100%; */
  border-radius: 30px;
  top: 47.5%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 0;
  box-sizing: border-box;
  border: 1px solid white;
}

#navball {
  /* height: 200px;
  width: 200px; */
  position: absolute;
  bottom: 8%;
  left: 14.59%;
  z-index: 2;
}

#hud-darken {
  position: absolute;
  top: 50%;
  left: 50%;
  height: min(85vh, calc(100vw * 0.714));
  width: min(85vh, calc(100vw * 0.714));
  transform: translate(-50%, -50%);
  overflow: hidden;
  /* border: 1px solid pink; */
}

.hud-darken-ring {
  height: min(85vh, calc(100vw * 0.714));
  width: min(85vh, calc(100vw * 0.714));
  /* object-fit: cover; */
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  /* border: 5px solid red; */
  z-index: 2;
}

#hud-ring {
  /* position: absolute;
  display: block; */
  top: 50%;
  left: 50%;
  width: calc((min(85vh, calc(100vw * 0.714))) / 2);
  height: calc((min(85vh, calc(100vw * 0.714))) / 2);
  position: absolute;
  transform: translate(-50%, -50%);
  overflow: hidden;
  /* border: 5px solid blue; */
  z-index: 1;
}

#hud-white-inner,
#hud-white-outer {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.hud-svg {
  fill: none;
  stroke: #7700aa;
  stroke-width: 10;
  transition-property: stroke;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  position: absolute;
  top: 0;
  left: 0;
}

.corner-circles-base {
}

#lower-left {
  position: absolute;
  bottom: 8%;
  /* left: 15px; */
  z-index: 1;
  left: 14.59%;
}

#lower-right {
  position: absolute;
  bottom: 8%;
  right: 14.59%;
  z-index: 1;
}

#upper-left {
  position: absolute;
  top: 3%;
  left: 14.59%;
  z-index: 1;
  /* border: 1px solid orange; */
}

#upper-right {
  position: absolute;
  top: 3%;
  /* right: 14.285714%; */
  right: 14.59%;
  z-index: 1;
}

@media screen and (max-width: 1200px), (max-height: 650px) {
  
  #lower-left {
    height: 150px;
    width: 150px;
    /* left: 25px; */
  }
  #lower-right {
    height: 150px;
    width: 150px;
    /* right: 25px; */
  }
  #upper-left {
    height: 150px;
    width: 150px;
    /* left: 25px; */
  }
  #upper-right {
    height: 150px;
    width: 150px;
    /* right: 25px; */
  }
  #navball {
    height: 150;
    width: 150;
    /* left: 25px; */
  }
  #meter-svg {
    height: 150px;
    width: 150px;
  }
  #lower-right-svg {
    height: 150px;
    width: 150px;
  }
  #upper-right-svg {
    height: 150px;
    width: 150px;
  }
  #progress-headings {
    height: 150px;
    width: 150px;
  }
}

@media screen and (max-width: 850px), (max-height: 450px) {
  
  #lower-left {
    height: 100px;
    width: 100px;
    /* left: 20px; */
  }
  #lower-right {
    height: 100px;
    width: 100px;
    /* right: 20px; */
  }
  #upper-left {
    height: 100px;
    width: 100px;
    /* left: 20px; */
  }
  #upper-right {
    height: 100px;
    width: 100px;
    /* right: 20px; */
  }
  #navball {
    /* left: 20px; */
    height: 100;
    width: 100;
  }
  #meter-svg {
    height: 100px;
    width: 100px;
  }
  #lower-right-svg {
    height: 100px;
    width: 100px;
  }
  #upper-right-svg {
    height: 100px;
    width: 100px;
  }
  #progress-headings {
    height: 100px;
    width: 100px;
  }
}

.circular-progress {

  text-align: center;
}

.circle-big-svg {
  position: absolute;
  text-align: center;
  width: 200px;
  height: 200px;
}

.animation-circle {
  stroke-dashoffset: 170;
  animation-name: progressingCircular;
  animation-iteration-count: infinite;
  stroke: #666;
  stroke-width: 0.35em;
}

#meter-svg {
  /* transform: rotate(135deg); */
  left: 14.59%;
  top: 3%;
  z-index: 2;
}

#meter-svg circle {
  /* top: 50%;
  left: 50%; /* */
  transform: translate(12.5%, 12.5%) scale(0.75);
}
.animation-circle {
  stroke-dashoffset: 170;
  animation-name: progressingCircular;
  animation-iteration-count: infinite;
  stroke: #666;
  stroke-width: 0.35em;
}

@keyframes progressingCircular {
  0% {
    stroke-dashoffset: v-bind(acceleration);
  }
  50% {
    stroke-dashoffset: 350;
  }
  100% {
    stroke-dashoffset: v-bind(acceleration);
  }
}

.progress-headings {
  position: absolute;
  text-align: center;
  top: 3%;
  left: 14.59%;
  height: 200px;
  width: 200px;
  /* border: 0.5px solid tomato; */
}

#main-circular-heading {
  font-size: max(0.65vh, 0.65vw);
  position: relative;
  /* width: 10%; */
  top: 32.5%;
  z-index: 2;
  opacity: 0.5;
  /* transform: translate(-50%, -50%); */
}

#number-circular-heading {
  font-size: max(2vh, 2vw);
  position: relative;
  top: 35.5%;
  /* left: 18.5%; */
  z-index: 2;
  /* transform: translate(-50%, -50%); */
}

.lower-right-ringClass {
  position: absolute;
  width: 200px;
  height: 200px;
  /* border: 1px solid tomato; */
}

#lower-right-svg {
  bottom: 8%;
  right: 14.75%;
  z-index: 2;
}

#lower-right-svg-path {
  stroke: white;
  stroke-width: 0.0625;
  fill: #111b52;
  transform: translate(6%, 6%) scale(0.9);
}

.upper-right-ringClass {
  position: absolute;
  width: 200px;
  height: 200px;
  /* border: 1px solid tomato; */
}

#upper-right-svg {
  top: 3%;
  right: 14.59%;
  z-index: 2;
}

#upper-right-svg-path {
  stroke: white;
  stroke-width: 0.0625;
  fill: #111b52;
  transform: translate(5%, 5%) scale(1);
}

#upper-left-indicator-svg-path {

  transform: translate(45.5%, 26.25%) scale(0.35) rotate(130deg);
}

#upper-right-indicator-svg-path {

  transform: translate(73%, 50.25%) scale(0.35) rotate(230deg);
}

#lower-left-indicator-svg-path {

  transform: translate(26%, 47.5%) scale(0.35) rotate(50deg);
}

#lower-right-indicator-svg-path {
 
  transform: translate(53.75%, 71%) scale(0.35) rotate(310deg);
}

#lower-right-indicator-inner-svg-path {

  transform: translate(49.5%, 49.5%) scale(0.125);
}

#lower-left-indicator-inner-svg-path {
 
  transform: translate(38.25%, 49.5%) scale(0.125);
}

#upper-right-indicator-inner-svg-path {
  
  transform: translate(49.5%, 38.25%) scale(0.125);
}

#upper-left-indicator-inner-svg-path {
  
  transform: translate(38.25%, 38.25%) scale(0.125);
}

#upper-ring-sign-svg-path {
  transform: translate(6%, 6%) scale(0.9);
}

#lower-ring-sign-svg-path {
  transform: translate(6%, 6%) scale(0.9);
}

#upper-trapezium-sign-svg-path {
  transform: translate(38.5%, 21.5%) scale(0.35);
}

#left-trapezium-sign-svg-path {
  transform: translate(30%, 76%) scale(0.35) rotate(245deg);
}

#right-trapezium-sign-svg-path {
  transform: translate(83%, 52%) scale(0.35) rotate(115deg);
}

.hud-number {
  font-size: min(1vw, 2.25vh);
  color: #2aff00;
}

.hud-minor-number {
  font-size: min(0.6vw, 1.25vh);
}

#yaw-number {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#roll-number {
  position: absolute;
  top: 12.5%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#pitch-number {
  position: absolute;
  top: 50%;
  left: 86%;
  transform: translate(-50%, -50%);
}

#xyz-number {
  position: absolute;
  color: #2aff00;
  left: 14%;
  transform: translate(-50%, -50%);
}

#live-number {
  position: absolute;
  color: #24d2fd;
  transform: translate(-50%, -50%);
}

#hud-title {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: min(0.4vw, 0.9vh);
}

.hud-circle-svg {
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  width: calc((min(81vh, calc(100vw * 0.714))) / 2);
  height: calc((min(81vh, calc(100vw * 0.714))) / 2);
}

.animation-yaw {
  stroke-dashoffset: v-bind(yawGoalValue);
  transition: stroke 0.25s linear;
  stroke: v-bind(yawColor);
  stroke-width: 0.25em;
}

#yaw-svg {
  /* transform: rotate(135deg); */
  left: 50%;
  top: 50.5%;
  z-index: 2;
}

.animation-pitch {
  stroke-dashoffset: v-bind(pitchGoalValue);
  transition: stroke 0.25s linear;
  stroke: v-bind(pitchColor);
  stroke-width: 0.25em;
}

#pitch-svg {
  /* transform: rotate(135deg); */
  left: 50.5%;
  top: 50%;
  z-index: 2;
}

.animation-roll {
  stroke-dashoffset: v-bind(rollGoalValue);
  transition: stroke 0.25s linear;
  stroke: v-bind(rollColor);
  stroke-width: 0.25em;
}

#roll-svg {
  /* transform: rotate(135deg); */
  left: 50%;
  top: 49.5%;
  z-index: 2;
}

@keyframes myAnim {
  0% {
    stroke-dashoffset: 132;
  }
  50% {
    stroke-dashoffset: 165;
  }
  100% {
    stroke-dashoffset: 132;
  }
}

#meter-svg circle {
  /* top: 50%;
  left: 50%; /* */
  transform: translate(12.5%, 12.5%) scale(0.75);
}

.arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.arrow span {
  display: block;
  width: min(1.75vw, 3.5vh);
  height: min(1.75vw, 3.5vh);
  border-bottom: 5px solid #24d2fd;
  border-right: 5px solid #24d2fd;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 1s infinite;
}
.arrow span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}

.rotateWrapper {
  position: absolute;
  height: min(20vh, 10vw);
  width: min(20vh, 10vw);
  top: 50%;
  left: 50%;
}

#rotateAnimObject {
  height: 100%;
  width: 100%;
  border-radius: 100%;
  /*   background-image: linear-gradient(to top, red, gray); */
  border-top: 0.75px solid #24d2fd;
  /*   transform: perspective(300px) rotateY(-45deg); */
  animation: rotateAnim 1s infinite;
}

@keyframes rotateAnim {
  0% {
    transform: perspective(800px) rotate3d(1, 0, 0, 0deg);
  }
  100% {
    transform: perspective(800px) rotate3d(1, 0, 0, -95deg);
    opacity: 0;
  }
}

#rotateE {
  height: 100%;
  width: 100%;
  border-radius: 100%;
  /*   background-image: linear-gradient(to top, red, gray); */
  border-top: 0.75px solid #24d2fd;
  /*   transform: perspective(300px) rotateY(-45deg); */
  animation: forE 1s infinite;
}

@keyframes forE {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
    opacity: 0;
  }
}

#rotateQ {
  height: 100%;
  width: 100%;
  border-radius: 100%;
  /*   background-image: linear-gradient(to top, red, gray); */
  border-top: 0.75px solid #24d2fd;
  /*   transform: perspective(300px) rotateY(-45deg); */
  animation: forQ 1s infinite;
}

@keyframes forQ {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-180deg);
    opacity: 0;
  }
}

.controls {
  position: absolute;
  right: 1.5%;
  color: #313d7b;
  font-size: 1em;
}

#back-box {
  background-color: #020738;
  height: 95vh;
  width: 100%;
  bottom: 30px;
  border-radius: 0 0 30px 30px;
  box-sizing: border-box;
  border-bottom: 0.5px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
}

body {
  display: block;
  margin: 0;
  background-color: #111b52;
}
</style>
