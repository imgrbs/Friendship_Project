import { withProps } from 'recompose'
import styled from 'react-emotion'

const Container = styled.div`
  min-height: 100vh;
`

const Dashboard = styled.div`
  margin-top: 56px;
`

const DashboardEnchance = withProps({
  className: 'col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3'
})(Dashboard)

const InContainer = styled.div`

`

export default Container

export {
  DashboardEnchance
}
