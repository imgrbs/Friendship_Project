import { lifecycle } from 'recompose'
import { hydrate, injectGlobal } from 'emotion'

import colors from '../components/Core/colors'

if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

const enchance = lifecycle({
  async componentWillMount () {
    injectGlobal`
        body {
          font-family: AvenirNext-Regular,'Prompt',"sans-serif";
          font-size: 17px;
          background-color: ${colors.background};
          color: ${colors.font} !important;
        }
        a {
          color: ${colors.font};
        }
        .nav-link:hover {
          color: ${colors.fontHover} !important;
        }
        .nav-link.active {
          background-color: ${colors.backgoundActive} !important;
          color: ${colors.fontHover} !important;
          border-right: 3px solid ${colors.blueHover};
        }
        .badge-success {
          background-color: ${colors.green};
        }
        .badge-warning {
          background-color: ${colors.yellow};
        }
        .btn {
          cursor: pointer;
        }
        .list-group-item.active, .btn-primary {
          background-color: ${colors.blueHover};
          border-color: ${colors.blueHover};
        }
        .list-group-item.active:hover, .btn-primary:hover {
          background-color: ${colors.hover};
          border-color: ${colors.hover};
        }
        .btn-outline-primary {
          border-color: ${colors.blueHover};
          color: ${colors.blueHover};
          
          &:hover {
            border-color: ${colors.blueHover};
            background-color: ${colors.blueHover};
          }
        }
        .btn-outline-success {
          border-color: ${colors.green};
          color: ${colors.green};
          
          &:hover {
            border-color: ${colors.green};
            background-color: ${colors.green};
          }
        }
        .navbar {
          box-shadow: 4px 4px 40px 0 rgba(0,0,0,.05);
        }
        nav, .sidebar { 
          background: #fff;
        }
        .sidebar {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 1000;
          padding: 20px;
          overflow-x: hidden;
          overflow-y: auto;
        }
        .list-group {
          padding: 0;
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
