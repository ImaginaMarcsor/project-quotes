<template>
  <div class="q-container">
    <div class="desktop-only">
      <img :src="logo" class="q-mt-md" >
    </div>
    <q-no-ssr>
      <div class="absolute-top-right" style="top: 10px; right: 10px;">
        <q-btn-group rounded>
          <q-btn :to="{name: 'app.admin.home'}" push no-caps v-if="quserState.authenticated" rounded>
            <q-avatar size="25px">
              <img :src="quserState.userData.mainImage">
            </q-avatar>
            <div class="q-ml-xs">
              {{quserState.userData.firstName}}
            </div>
          </q-btn>
          <q-btn :to="{name: 'auth.logout'}" push no-caps v-if="quserState.authenticated" rounded>
            <q-icon color="negative" name="fas fa-sign-out-alt" size="20px"/>
          </q-btn>
	        <q-btn v-else dense flat no-caps :to="{name: 'auth.login'}" class="no-shadow">
		        <q-icon color="negative" name="fas fa-sign-in-alt" size="20px"/>
	        </q-btn>
        </q-btn-group>
	      
      </div>
    </q-no-ssr>
    <div class="mobile-only">
      <q-toolbar class="text-black bg-white shadow-1">
        <img :src="logo" style="width: 20%">
        <q-toolbar-title>{{projectName}}</q-toolbar-title>
      </q-toolbar>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        projectName: this.$store.getters['qsiteSettings/getSettingValueByName']('core::site-name'),
        logo: this.$store.getters['qsiteSettings/getSettingMediaByName']('isite::logo1').path,
      }
    },
    computed: {
      quserState() {
        return this.$store.state.quserAuth
      },
    },
  }
</script>
