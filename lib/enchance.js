import { lifecycle } from 'recompose'
import { injectGlobal } from 'emotion'

import colors from '../components/Core/colors'

const enchance = lifecycle({
  async componentWillMount () {
    injectGlobal`
        body {
          font-family: 'Prompt', sans-serif;
          background-color: ${colors.background};
          color: #666;
        }
        .btn {
          cursor: pointer;
        }
        .navbar {
          box-shadow: 4px 4px 40px 0 rgba(0,0,0,.05);
          z-index: 999;
        }
        nav, .sidebar { 
          background: #fff;
        }
        .sidebar {
          position: fixed;
          top: 55.97px;
          bottom: 0;
          left: 0;
          z-index: 1000;
          padding: 20px;
          overflow-x: hidden;
          overflow-y: auto;
          border-right: 1px solid #eee;
        }
        .sidebar {
          padding-left: 0;
          padding-right: 0;
        }
        .sidebar .nav {
          margin-bottom: 20px;
        }
        .sidebar .nav-item {
          width: 100%;
        }
        .sidebar .nav-item + .nav-item {
          margin-left: 0;
        }
        .sidebar .nav-link {
          border-radius: 0;
        }
      `
  }
})

export default enchance
