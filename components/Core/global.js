import { withProps } from 'recompose'
import styled from 'react-emotion'

const Container = styled.div`
  min-height: 100vh;
`

const Dashboard = styled.div`
  margin-top: 56px;
  padding: 0 2em 2em 2em;
`

const DashboardEnchance = withProps({
  className: 'col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3'
})(Dashboard)

const InContainer = styled.div`
  background: #fff;
  padding: 2.5em;
  border-radius: 2px;
  font-size: 12px;
  position: relative;
  transition: all 0.3s;

  &:hover {
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  }
`

export default Container

export {
  DashboardEnchance,
  InContainer
}
