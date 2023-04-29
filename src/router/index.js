import { createRouter, createWebHistory } from 'vue-router'

//Import Layouts
import FrontendLayout from '@/layouts/Frontend.vue'
import BackendLayout from '@/layouts/Backend.vue'

// import Views
// Frontend
import HomeView from '@/views/frontend/HomeView.vue'
import AboutView from '@/views/frontend/AboutView.vue'
import ContactView from '@/views/frontend/ContactView.vue'
import PortfolioView from '@/views/frontend/PortfolioView.vue'
import ServiceView from '@/views/frontend/ServiceView.vue'
import RegisterView from '@/views/frontend/RegisterView.vue'
import LoginView from '@/views/frontend/LoginView.vue'
import ForgotPasswordView from '@/views/frontend/ForgotPasswordView.vue'
import NotFound404View from '@/views/frontend/NotFound404View.vue'

//Backend
import DashboardView from '@/views/backend/DashboardView.vue'
import ProductsView from '@/views/backend/ProductsView.vue'

const routes = [

  /** Frontend Route */
  {
    path: '/',
    name: 'Home',
    component: FrontendLayout,
    children: 
    [
      {
        path: '',
        component: HomeView
      }
    ],
    meta: {
      title: 'หน้าหลัก',
      description: 'หน้าหลักระบบคงคลังสินค้า'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: FrontendLayout,
    children: 
    [
      {
        path: '',
        component: AboutView
      }
    ],
    meta: {
      title: 'เกี่ยวกับเรา',
      description: 'รายละเอียดหน้าเกี่ยวกับเรา'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: FrontendLayout,
    children: 
    [
      {
        path: '',
        component: ContactView
      }
    ],
    meta: {
      title: 'ติดต่อเรา',
      description: 'รายละเอียดหน้าติดต่อเรา'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: FrontendLayout,
    children: 
    [
      {
        path: '',
        component: PortfolioView
      }
    ],
    meta: {
      title: 'ผลงานของเรา',
      description: 'รายละเอียดหน้าผลงานของเรา'
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: FrontendLayout,
    children: 
    [
      {
        path: '',
        component: ServiceView
      }
    ],
    meta: {
      title: 'บริการของเรา',
      description: 'รายละเอียดหน้าบริการของเรา'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: FrontendLayout,
    children:
    [
      {
        path: '',
        component: RegisterView
      }
    ],
    meta: {
      title: 'สมัครสมาชิกใหม่',
      description: 'รายละเอียดสมัครสมาชิกใหม่'
    }
  },
  {
      path: '/login',
      name: 'Login',
      component: FrontendLayout,
      children:
      [
        {
          path: '',
          component: LoginView
        }
      ],
      meta: {
        title: 'เข้าสู่ระบบ',
        description: 'รายละเอียดหน้าเข้าสู่ระบบ'
      }
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: FrontendLayout,
    children:
    [
      {
        path: '',
        component: ForgotPasswordView
      }
    ],
    meta: {
      title: 'ลืมรหัสผ่าน',
      description: 'รายละเอียดหน้าลืมรหัสผ่าน'
    }
  },
/** End Frontend Route */

/** Error 404 */
  {
    path: "/:catchAll(.*)",
    component: NotFound404View,
    meta: {
      title: '404 ไม่พบหน้านี้',
      description: 'รายละเอียดหน้า 404'
    }
  },
/** End Error 404 */

/** Backend Route */
{
  path: '/backend',
  name: 'Dashboard',
  component: BackendLayout,
  children: [
    {
      path: '',
      component: DashboardView
    }
  ],
  meta:{
    title: 'Dashboard'
  }
},
{
  path: '/backend/products',
  name: 'Products',
  component: BackendLayout,
  children: [
    {
      path: '',
      component: ProductsView
    }
  ],
  meta:{
    title: 'Products'
  }
}
/** end Backend Route */
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
