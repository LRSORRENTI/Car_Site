// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Item from './ItemDiv'
// function App() {
//     return (
function HomeGrid() {
    return (
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {Array.from(Array(6)).map((_, index) => (
    <Grid xs={2} sm={4} md={4} key={index}>
      <Item>xs=2</Item>
      <h1>hello</h1>
    </Grid>
  ))}
</Grid>
    )
}

export default HomeGrid;