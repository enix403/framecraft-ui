<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/home/Home.svelte";
  import Login from "./pages/Login.svelte";
  import Register from "./pages/Register.svelte";
  import Generate from "./pages/generate/Generate.svelte";
  import FinalizeDesign from "./pages/generate/FinalizeDesign.svelte";
  import ViewRender from "./pages/generate/ViewRender.svelte";
</script>

<Router>
  <Route path="/home" component={Home} />
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register} />
  <Route path="/gen" component={Generate} />
  <Route path="/final" component={FinalizeDesign} />
  <Route path="/render" component={ViewRender} />
</Router>
