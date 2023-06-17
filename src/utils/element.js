import Vue from "vue";
import {
  Button,
  Card,
  Form,
  FormItem,
  Input,
  Message,
  MessageBox,
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
  Pagination,
  Drawer,
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
  Pagination,
  Drawer,
];
function UseElement() {
  components.forEach((val) => {
    return Vue.use(val);
  });
  return (
    (Vue.prototype.$message = Message),
    (Vue.prototype.$confirm = MessageBox.confirm)
  );
}
UseElement();
