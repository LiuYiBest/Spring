<demo>
  基本使用
    </demo>
    <template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog
      v-model:visible="visible"
      :onClickOverlay="true"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:title>
        <strong>Title</strong>
      </template>
      <template v-slot:content>
        <strong>提示信息</strong>
        <div>警告</div>
      </template>
    </Dialog>
  </div>
</template>
    
    <script lang="ts">
import Dialog from '../../lib/Dialog.vue'
import Button from '../../lib/Button.vue'
import { ref } from 'vue'
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {}
    return {
      visible,
      toggle,
      f1,
      f2,
    }
  },
}
</script>