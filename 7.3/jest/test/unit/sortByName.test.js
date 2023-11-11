const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const data = [                                                  
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected = [                                               
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const result = sorting.sortByName(data);                         

    expect(result).toEqual(expected);                              
  });

  it("Should throw an exception when calling", () => {               
    expect(() => sorting.sortByName()).toThrow();
  })

  it("Books names should be sorted even if names recurring", () => {
    const data = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
      "Гарри Поттер",
    ];

    const result = sorting.sortByName(data);                       

    expect(result).toEqual(expected);                              
  });

});
