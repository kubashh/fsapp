import { fsdapp } from "fsdapp"

const frontend = () => {
  console.log(`frontend`)
}

const backend = () => {
  console.log(`backend`)
}

fsdapp(frontend, backend)