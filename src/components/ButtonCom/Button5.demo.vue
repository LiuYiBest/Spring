  
<demo>
    支持加载按钮的三种状态
    </demo>
    <template>
  <div>
    <Button :loading="loading"  @click="handleClick"> 点击开始加载</Button>
    <Button loading>正在加载中</Button>
    <Button success>加载完成</Button>
  </div>
</template>
    
    <script lang="ts">
import Button from '../../lib/Button.vue'
import { ref } from 'vue';

export default {
  components: {
    Button
  },
  setup() {
    const msg = ref('点我开始加载');
    const loading = ref(false);

    const handleClick = () => {
      loading.value = true;
      msg.value = '加载中';
    };
    return { msg, loading, handleClick };
  }
}
</script>