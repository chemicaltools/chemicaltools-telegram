workflow "Install" {
  resolves = [
    "yarn install",
  ]
  on = "push"
}

action "yarn install" {
  uses = "Borales/actions-yarn@master"
  args = "install"
}
