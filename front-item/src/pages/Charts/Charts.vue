<template>
  <div id="charts">
    <div class="row">
      <div class="navigation-sidebar col l2">
        <ul>
          <li :class="{'active': onglet == 'syntheseGenerale'}" @click="onglet = 'syntheseGenerale'">Synthèse Générale</li>
          <li :class="{'active': onglet == 'syntheseUser1'}" @click="onglet = 'syntheseUser1'">Synthèse utilisateur 1</li>
        </ul>
      </div>
      <div class="col offset-l1 l3" v-if="onglet == 'syntheseGenerale'">
        <div class="synthese-small">
          <div class="container-synthese">
            <div class="container-numbers">
              <div class="synthese-number">
                122
              </div>
              <div class="synthese-label">
                <div class="synthese-label-title">Missions</div>
              </div>
            </div>
            <div class="synthese-date">
              Effectuées aujourd'hui
            </div>
          </div>
        </div> 
        <div class="synthese-small">
          <div class="container-synthese">
            <div class="container-numbers">
              <div class="synthese-number">
                62
              </div>
              <div class="synthese-label">
                <div class="synthese-label-title">Missions</div>
                <div class="synthese-label-subTitle">de Pré-implantation</div>
              </div>
            </div>
            <div class="synthese-date">
              Effectuées aujourd'hui
            </div>
          </div>
        </div> 
        <div class="synthese-small">
          <div class="container-synthese">
            <div class="container-numbers">
              <div class="synthese-number">
                19
              </div>
              <div class="synthese-label">
                <div class="synthese-label-title">Missions</div>
                <div class="synthese-label-subTitle">de Rotation</div>
              </div>
            </div>
            <div class="synthese-date">
              Effectuées aujourd'hui
            </div>
          </div>
        </div> 
        <div class="synthese-small">
          <div class="container-synthese">
            <div class="container-numbers">
              <div class="synthese-number">
                4
              </div>
              <div class="synthese-label">
                <div class="synthese-label-title">Missions</div>
                <div class="synthese-label-subTitle">de Doublons</div>
              </div>
            </div>
            <div class="synthese-date">
              Effectuées aujourd'hui
            </div>
          </div>
        </div> 
      </div>
      <div class="col offset-l1 l5" v-if="onglet == 'syntheseGenerale'">
        <div class="synthese-big">
          <div class="container-synthese">
            <div class="container-numbers">
              <div class="synthese-number">
                {{Number(2856).toLocaleString()}}
              </div>
              <div class="synthese-label">
                Ref
              </div>
            </div>
            <div class="synthese-date">
              Déplacées depuis le 01/05/2019
            </div>
          </div>
        </div> 
        <div class="synthese-big">
          <div class="container-synthese">
            <div class="container-numbers">
              <div class="synthese-number">
                69.8
              </div>
              <div class="synthese-label">
                H
              </div>
            </div>
            <div class="synthese-date">
              Déplacées depuis le 01/05/2019
            </div>
          </div>
        </div> 
      </div>
      <div class="col offset-l1 l3" v-if="onglet == 'syntheseUser1'">
          <div class="synthese-small">
          <div class="container-synthese">
            <div class="container-numbers">
              <div class="synthese-number">
                12
              </div>
              <div class="synthese-label">
                <div class="synthese-label-title">Missions</div>
              </div>
            </div>
            <div class="synthese-date">
              Effectuées aujourd'hui
            </div>
          </div>
        </div> 
        <div class="synthese-small">
          <div class="container-synthese">
            <div class="container-numbers">
              <div class="synthese-number">
                6
              </div>
              <div class="synthese-label">
                <div class="synthese-label-title">Missions</div>
                <div class="synthese-label-subTitle">de Pré-implantation</div>
              </div>
            </div>
            <div class="synthese-date">
              Effectuées aujourd'hui
            </div>
          </div>
        </div> 
        <div class="synthese-small">
          <div class="container-synthese">
            <div class="container-numbers">
              <div class="synthese-number">
                3
              </div>
              <div class="synthese-label">
                <div class="synthese-label-title">Missions</div>
                <div class="synthese-label-subTitle">de Rotation</div>
              </div>
            </div>
            <div class="synthese-date">
              Effectuées aujourd'hui
            </div>
          </div>
        </div> 
        <div class="synthese-small">
          <div class="container-synthese">
            <div class="container-numbers">
              <div class="synthese-number">
                4
              </div>
              <div class="synthese-label">
                <div class="synthese-label-title">Missions</div>
                <div class="synthese-label-subTitle">de Doublons</div>
              </div>
            </div>
            <div class="synthese-date">
              Effectuées aujourd'hui
            </div>
          </div>
        </div> 
      </div>
      <div class="col offset-l1 l5" v-if="onglet == 'syntheseUser1'">
        <div class="synthese-big">
          <div class="container-synthese">
            <div class="container-numbers">
              <div class="synthese-number">
                {{189 || format_unity}}
              </div>
              <div class="synthese-label">
                Ref
              </div>
            </div>
            <div class="synthese-date">
              Déplacées depuis le 01/05/2019
            </div>
          </div>
        </div> 
        <div class="synthese-big">
          <div class="container-synthese">
            <div class="container-numbers">
              <div class="synthese-number">
                01.9
              </div>
              <div class="synthese-label">
                H
              </div>
            </div>
            <div class="synthese-date">
              Déplacées depuis le 01/05/2019
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "charts",
    components: {
    },
    methods: {},
    data() {
      return {
        onglet: 'syntheseGenerale',
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "charts.sass";
</style>