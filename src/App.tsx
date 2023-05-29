import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // larger than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        {/* show on large screens and above */}
        <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem area="main">main</GridItem>
    </Grid>
  );
}

export default App;
