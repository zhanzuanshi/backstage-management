import Vue from "vue";
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  MenuItem,
  Row,
  Col,
  Avatar,
  Popconfirm,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  Table,
  TableColumn,
  Pagination  
} from "element-ui";
const components = [
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Main,
  Menu,
  MenuItem,
  Row,
  Col,
  Avatar,
  Popconfirm,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  Table,
  TableColumn,
  Pagination
];
function UseElement() {
  components.forEach((val) => {
    return Vue.use(val);
  });
  return (Vue.prototype.$message = Message);
}
UseElement();
