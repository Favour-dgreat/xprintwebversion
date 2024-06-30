import { createRouter, createWebHistory } from 'vue-router'
import homeview from '../views/homeview.vue'
import loginView from '../components/pages/loginView.vue'
import registerView from '../components/pages/register.vue'
// import dashboardView from '../components/pages/dashboardmain/App.vue'
import mainComponent from '../components/pages/user/component/main.vue'
// import dashboardView from '../components/pages/user/index.vue'
import dashboardView from '../components/pages/user/index.vue'
import privacy from '../components/pages/privacy.vue'
import aml from '../components/pages/antimoneylaundering.vue'
import terms from '../components/pages/terms.vue'
import forgotpassword from '../components/pages/forgottenpassword.vue'
import comingsoon from '../views/comingcoon.vue'
import adminLoginView from '../components/pages/admin/adminLogin/index.vue'
import adminDashboardView from '../components/pages/admin/index.vue'
// import main from '../components/pages/dashboardmain/main.vue'
// import form from '../components/pages/dashboardmain/component/form.vue'
import transactComponent from '../components/pages/user/component/transact.vue'
import settingsComponent from '../components/pages/user/component/settings.vue'
import profileComponent from '../components/pages/user/component/profile.vue'
import resetComponent from '../components/pages/user/component/reset.vue'
import deleteComponent from '../components/pages/user/component/delete.vue'
import resetEmailComponent from '../components/pages/user/component/changeEmail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: homeview, // Main application component
        dashboardView: dashboardView
        // Dashboard component
      },
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: registerView,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: loginView,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: adminLoginView,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/adminDashboard',
      name: 'adminDashboard',
      component: adminDashboardView,
      meta: {
        requiresAdmin: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboardView,

      children: [
        {
          path: '',
          name: 'main',
          component: mainComponent
        },
        {
          path: '/transact',
          name: 'transact',
          component: transactComponent
        },
        {
          path: '/settings',
          name: 'settings',
          component: settingsComponent,
          children: [
            {
              path: '',
              name: 'reset',
              component: resetComponent
            },
            {
              path: '/delete',
              name: 'delete',
              component: deleteComponent
            },
            {
              path: '/resetEmail',
              name: 'resetEmail',
              component: resetEmailComponent
            }
          ]
        },
        {
          path: '/profile',
          name: 'profile',
          component: profileComponent
        }
      ],

      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: forgotpassword,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/comingsoon',
      name: 'comingsoon',
      component: comingsoon,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: privacy,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/terms',
      name: 'terms',
      component: terms,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/aml',
      name: 'aml',
      component: aml,
      meta: {
        requiresGuest: true
      }
    }
  ]
})
//newly added && !auth.currentUser
router.beforeEach(async (to, from, next) => {
  try {
    // Attempt to get the active user from local storage
    const activeUser = localStorage.getItem('ActiveUser')

    if (to.matched.some((record) => record.meta.requiresAuth) && !activeUser) {
      // If there's no active user, redirect to the login page
      next('/login')
    } else {
      // If there's an active user, update the user's last activity timestamp
      localStorage.setItem('LastActivityTime', new Date().getTime())
      next()
    }
  } catch (error) {
    // Handle errors, e.g., "activeUser is not defined"
    console.error('Error:', error)
    // Redirect to the login page
    next('/login')
  }
  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    // This route requires admin access

    if (activeUser !== 'SeFPNc7VwPaNYhgW4vgK4TyaPGL2') {
      // The user doesn't have admin access, so log them out and redirect to /login
      localStorage.removeItem('ActiveUser') // Remove the active user
      next('/login')
    }
  }
})
const inactivityTimeout = 2 * 24 * 60 * 60 * 1000

setInterval(() => {
  const lastActivityTime = localStorage.getItem('LastActivityTime')
  if (lastActivityTime && new Date().getTime() - lastActivityTime > inactivityTimeout) {
    // Log out the user
    localStorage.removeItem('ActiveUser')
    router.push('/login')
  }
}, 60000)
export default router
