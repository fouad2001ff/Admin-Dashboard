import { Box } from '@mui/material'
import Geography from './Geography'
import Header from '../../Header'

function GeographyChart() {
  return (
    <Box>
      <Header title="Geography" subTitle="Simple Geography Chart" />

        <Geography />
    </Box>
  )
}

export default GeographyChart