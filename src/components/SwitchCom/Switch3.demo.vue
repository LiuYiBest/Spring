<demo>
  支持不同的Size
  </demo>
  <template>
    <Switch v-model:value="big" size="big" />
    <br />
    <Switch v-model:value="normal" />
    <br />
    <Switch v-model:value="small" size="small" />
</template>
  
  <script lang="ts">
import Switch from '../../lib/Switch.vue'
import { ref } from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const big = ref(false);
    const normal = ref(false);
    const small = ref(false);
    return {
      big,
      normal,
      small,
    }
  }
}
</script>
