<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="md" type="dark" variant="info">
        <b-container>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand href="#">NavBar</b-navbar-brand>
        </b-container>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
            <b-nav-item :to="{name: 'About'}">About</b-nav-item>
            <b-nav-item :to="{name: 'Services'}">Services</b-nav-item>
            <b-nav-item :to="{name: 'Photos'}">Photos</b-nav-item>
            <b-nav-item :to="{name: 'Grid'}">Grid</b-nav-item>
            <b-nav-item :to="{name: 'Cards'}">Cards</b-nav-item>
            <b-nav-item :to="{name: 'Form'}">Forms</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <b-container>
        <router-view />
      </b-container>

    </div>
  </div>
</template>