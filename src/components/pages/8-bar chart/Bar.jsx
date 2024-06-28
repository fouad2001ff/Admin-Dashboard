import { Box } from '@mui/material'
import Header from '../../Header'
import BarChart from './BarChart'

function Bar() {
  return (
    <Box>

      <Header title={"Bar Chart"} subTitle={'The minimum wage in Germany, France and Spain (EUR/month)'} />
      <BarChart />

    </Box>
  )
}

export default Bar