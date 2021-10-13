<demo>
  禁止遮罩层关闭
    </demo>
    <template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog
      v-model:visible="visible"
      :onClickOverlay="false"
    >
      <template v-slot:title>
        <strong>Title</strong>
      </template>
      <template v-slot:content>
        <strong>禁止遮罩层点击关闭</strong>
        <p>设置onClickOverlay，点击遮罩层不会关闭对话框，必须点击ok和cancel或者关闭按钮。</p>
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

    return {
      visible,
      toggle,
    }
  },
}
</script>