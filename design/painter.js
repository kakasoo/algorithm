class painter {
  constructor() {
    this.cur = document.getElementsByTagName("body");
  }

  shiftRow(tag = "div") {
    const newEl = document.createElement(tag);
    this.cur.prepend(newEl);
    return this;
  }

  pushRow(tag = "div") {
    const newEl = document.createElement(tag);
    this.cur.appendChild(newEl);

    return this;
  }

  shiftCol(tag = "div") {
    const newEl = document.createElement(tag);
    this.cur.prepend(newEl);
    this.cur = newEl;

    return this;
  }

  pushCol(tag = "div") {
    const newEl = document.createElement(tag);
    this.cur.appendChild(newEl);
    this.cur = newEl;

    return this;
  }

  getLevel(num) {
    return this.el[num];
  }

  getID() {
    return this.cur.getID();
  }

  setSize(width, height) {
    this.cur.style = `width:${width}; height:${height}`;
    return this;
  }
}

const pt = new painter();

// test1

pt.pushRow().setSize(1000, 100).pushCol().setSize(500, 100).pushRow();
