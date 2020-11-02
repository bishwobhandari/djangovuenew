<template>
<div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Spectre</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
       <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">Project
          </a>
          <div class="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
            <a class="dropdown-item" data-toggle="modal" data-target="#newProject">New</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#openProject">Open</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#importProject">Import Project</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#exportProject">Export Project</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#addReference">Add Reference</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#deleteReference">Delete Reference</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#addToxicity">Add Reference Toxicity Value</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#deleteToxicity">Delete Reference Toxicity Value</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#exportExcel">Export to Excel</a>
          </div>
        </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Model
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" data-toggle="modal" data-target="#newModel">New</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#renameModel">Rename</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" data-toggle="modal" data-target="#deleteModel">Delete</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" data-toggle="modal" data-target="#saveEnds">Save ENDS</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#saveUser">Save User</a>
            </div>
          </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Help
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" data-toggle="modal" data-target="#quickGuide">Quick Start Guide</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#manual">User's Manual</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" data-toggle="modal" data-target="#showVersion">Show version</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#about">About</a>
            </div>
          </li>

    </ul>
    <ul class="navbar-nav ml-auto nav-flex-icons">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-user"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-default"
            aria-labelledby="navbarDropdownMenuLink-333">
            <a class="dropdown-item" href="/login">Login</a>
            <a class="dropdown-item" href="/logout">Sign Out</a>
          </div>
        </li>
      </ul>

  </div>
</nav>
<Modals></Modals>
</div>
</template>

<script>
import Modals from "./Modals"
export default {
    name:"Topbar",
    components:{
        Modals
    }
}
</script>