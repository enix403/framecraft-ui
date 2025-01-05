<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/home/Home.svelte";
  import Login from "./pages/auth/Login.svelte";
  import Register from "./pages/auth/Register.svelte";
  import Generate from "./pages/generate/Generate.svelte";
  import EdiDesign from "./pages/generate/EditDesign.svelte";
  import ViewRender from "./pages/generate/ViewRender.svelte";
  import MyDesigns from "./pages/generate/MyDesigns.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register} />
  <Route path="/generate" component={Generate} />
  <Route path="/edit" component={EdiDesign} />
  <Route path="/render" component={ViewRender} />
  <Route path="/my-designs" component={MyDesigns} />
</Router>
