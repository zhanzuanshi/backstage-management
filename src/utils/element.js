import Vue from 'vue'
import { Button ,Card,Form,FormItem,Input,Message} from 'element-ui'
const components = [Button,Card,Form,FormItem,Input]
function UseElement () {
  components.forEach((val) => {
    return Vue.use(val)
  })
return Vue.prototype.$message=Message
}
UseElement()
