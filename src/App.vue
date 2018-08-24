<template>
  <div id="app">
    <div id="content">
      <router-view/>
    </div>
    <div id="tabs">
      <ul class="inline-list">
        <li class="tab active">
          <v-icon name="home"></v-icon>
          Home
        </li>
        <li class="tab">
          <v-icon name="search"></v-icon>
          Search
        </li>
        <li class="tab">
          <v-icon name="heart"></v-icon>
          Recent
        </li>
        <li class="tab">
          <v-icon name="settings"></v-icon>
          Setting
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#content {
  flex: 1;
  overflow: hidden;
  .page {
    height: 100%;
    overflow-y: scroll;
  }
}

#tabs {
  flex: none;
  min-height: 60px;
  height: 60px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;

  .inline-list {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .tab {
    display: flex;
    flex-direction: column;
    border-top: 1px solid black;
    border-right: 1px solid black;

    &.active {
      font-weight: bold;
      text-transform: uppercase;
    }

    .icon {
      width: 24px;
    }
  }

  .tab:last-child {
    border-right: none;
  }
}

.inline-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;

  li {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
}

.widget {
  box-sizing: border-box;
  margin-bottom: 1rem;
}

.widget-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.widget-label {
  margin: 0;
  padding: 0;
}

.widget-inner {
  display: flex;
}

.widget-more {
  font-size: 1rem;
  text-decoration: none;
  color: #000;
}
</style>
