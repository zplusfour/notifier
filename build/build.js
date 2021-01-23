class Build {
  constructor(message, done_message) {
    this.msg = message;
    this.dm = done_message;
  }

  build() {
    return this.msg;
  }
  done() {
    return this.dm;
  }
}

const build = new Build("Building...", "Done!");

build.build()
setTimeout(() => {build.done()}, 4000);