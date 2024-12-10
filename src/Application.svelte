<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/home/Home.svelte";
  import Login from "./pages/Login.svelte";
  import Register from "./pages/Register.svelte";
  import Generate from "./pages/Generate.svelte";
</script>

<Router>
  <Route path="/home" component={Home} />
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register} />
  <Route path="/" component={Generate} />
</Router>
