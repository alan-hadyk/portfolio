import React from "react";
import { RenderResult } from "@testing-library/react";

import { Commits } from "pages/Home/sections/dashboard/elements/Commits";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { ListOfCommitsProps } from "UI/molecules/__typings__/ListOfCommits";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("pages / Home / sections / dashboard / elements / Commits", () => {
  test("should have correct structure if commitsState is loaded", () => {
    const { DashboardElement, ListOfCommits } = setup({
      commitsState: "loaded"
    });

    expect(
      DashboardElement.children[1].children[0].children[0].children[0]
    ).toEqual(ListOfCommits);
  });

  test("should have correct structure if commitsState is error", () => {
    const { Error, DashboardElement } = setup({
      commitsState: "error"
    });

    expect(
      DashboardElement.children[1].children[0].children[4].children[0]
        .children[0]
    ).toEqual(Error);
  });

  test("should have correct structure if commitsState is idle", () => {
    const { Loader, DashboardElement } = setup({
      commitsState: "idle"
    });

    expect(
      DashboardElement.children[1].children[0].children[0].children[0]
    ).toEqual(Loader);
  });

  test("should have correct structure if commitsState is loading", () => {
    const { Loader, DashboardElement } = setup({
      commitsState: "loading"
    });

    expect(
      DashboardElement.children[1].children[0].children[0].children[0]
    ).toEqual(Loader);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("childrenHeight", () => {
        test("should have calc(100% - 3.6rem)", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement.children[1]).toHaveStyleRule(
            "height",
            "calc(100% - 3.6rem)"
          );
        });
      });

      describe("flex", () => {
        test("should have 1 0 20%", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement).toHaveStyleRule("flex", "1 0 20%");
        });
      });

      describe("shouldDisplayCorners", () => {
        test("should render corners if commitsState is error", () => {
          const { Corners, DashboardElement } = setup({
            commitsState: "error"
          });

          expect(DashboardElement.children[1].children[0].children[0]).toEqual(
            Corners[0]
          );
          expect(DashboardElement.children[1].children[0].children[1]).toEqual(
            Corners[1]
          );
          expect(DashboardElement.children[1].children[0].children[2]).toEqual(
            Corners[2]
          );
          expect(DashboardElement.children[1].children[0].children[3]).toEqual(
            Corners[3]
          );
        });

        test("should not render corners if commitsState is idle", () => {
          const { Corners } = setup({
            commitsState: "idle"
          });

          expect(Corners[0]).toBeFalsy();
          expect(Corners[1]).toBeFalsy();
          expect(Corners[2]).toBeFalsy();
          expect(Corners[3]).toBeFalsy();
        });

        test("should not render corners if commitsState is loaded", () => {
          const { Corners } = setup({
            commitsState: "loaded"
          });

          expect(Corners[0]).toBeFalsy();
          expect(Corners[1]).toBeFalsy();
          expect(Corners[2]).toBeFalsy();
          expect(Corners[3]).toBeFalsy();
        });

        test("should not render corners if commitsState is loading", () => {
          const { Corners } = setup({
            commitsState: "loading"
          });

          expect(Corners[0]).toBeFalsy();
          expect(Corners[1]).toBeFalsy();
          expect(Corners[2]).toBeFalsy();
          expect(Corners[3]).toBeFalsy();
        });
      });

      describe("title", () => {
        test("should render Commits", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement.children[0].textContent).toEqual("Commits");
        });
      });

      describe("titleOverflow", () => {
        test("should have hidden", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement).toHaveStyleRule("overflow", "hidden");
        });
      });
    });
  });

  describe("ListOfCommits", () => {
    test("should render", () => {
      const { ListOfCommits } = setup();

      expect(ListOfCommits).toHaveStyleRule("align-items", "flex-start");
      expect(ListOfCommits).toHaveStyleRule("flex-flow", "column nowrap");
      expect(ListOfCommits).toHaveStyleRule("justify-content", "flex-start");
    });

    describe("Props", () => {
      describe("commitsList", () => {
        test("should render number of singular commits equal to length of commits list array - 2 items", () => {
          const commitsList = [
            {
              commit: {
                author: {
                  date: "2020-03-15T14:58:16Z"
                }
              },
              html_url:
                "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
              sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              html_url:
                "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
            }
          ];

          const { ListOfCommits } = setup({ commitsList });

          expect(ListOfCommits.childElementCount).toEqual(2);
        });

        test("should render number of singular commits equal to length of commits list array - 4 items", () => {
          const commitsList = [
            {
              commit: {
                author: {
                  date: "2020-03-15T14:58:16Z"
                }
              },
              html_url:
                "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
              sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              html_url:
                "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              html_url:
                "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c7",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c7"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              html_url:
                "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c2",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c2"
            }
          ];

          const { ListOfCommits } = setup({ commitsList });

          expect(ListOfCommits.childElementCount).toEqual(4);
        });

        test("should render each commit with sha", () => {
          const commitsList = [
            {
              commit: {
                author: {
                  date: "2020-03-15T14:58:16Z"
                }
              },
              html_url:
                "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
              sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              html_url:
                "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
            }
          ];

          const { ListOfCommits } = setup({ commitsList });

          expect(
            ListOfCommits.children[0].children[0].children[0].children[0]
              .textContent
          ).toEqual(commitsList[0].sha);
          expect(
            ListOfCommits.children[1].children[0].children[0].children[0]
              .textContent
          ).toEqual(commitsList[1].sha);
        });

        test("should render each commit with date", () => {
          const commitsList = [
            {
              commit: {
                author: {
                  date: "2020-03-15T14:58:16Z"
                }
              },
              html_url:
                "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
              sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              html_url:
                "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
            }
          ];

          const { ListOfCommits } = setup({ commitsList });

          expect(
            ListOfCommits.children[0].children[0].children[0].children[1]
              .textContent
          ).toEqual(commitsList[0].commit.author.date);
          expect(
            ListOfCommits.children[1].children[0].children[0].children[1]
              .textContent
          ).toEqual(commitsList[1].commit.author.date);
        });

        test("should render each commit with url", () => {
          const commitsList = [
            {
              commit: {
                author: {
                  date: "2020-03-15T14:58:16Z"
                }
              },
              html_url:
                "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
              sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              html_url:
                "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
            }
          ];

          const { ListOfCommits } = setup({ commitsList });

          expect(
            ListOfCommits.children[0].children[0].children[0].children[0].children[0].getAttribute(
              "href"
            )
          ).toEqual(commitsList[0].html_url);
          expect(
            ListOfCommits.children[1].children[0].children[0].children[0].children[0].getAttribute(
              "href"
            )
          ).toEqual(commitsList[1].html_url);
        });
      });

      describe("commitsState", () => {
        test("should render Error if commitsState is error", () => {
          const { Error, DashboardElement } = setup({
            commitsState: "error"
          });

          expect(
            DashboardElement.children[1].children[0].children[4].children[0]
              .children[0]
          ).toEqual(Error);
        });

        test("should not render Error if commitsState is idle", () => {
          const { Error } = setup({
            commitsState: "idle"
          });

          expect(Error).toBeFalsy();
        });

        test("should not render Error if commitsState is loaded", () => {
          const { Error } = setup({
            commitsState: "loaded"
          });

          expect(Error).toBeFalsy();
        });

        test("should not render Error if commitsState is loading", () => {
          const { Error } = setup({
            commitsState: "loading"
          });

          expect(Error).toBeFalsy();
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Corners: Element[];
  DashboardElement: Element;
  Error: Element;
  ListOfCommits: Element;
  Loader: Element;
}

type ListOfCommitsTestProps = Partial<ListOfCommitsProps>;

function setup(additionalProps?: ListOfCommitsTestProps): Setup {
  const defaultProps: ListOfCommitsProps = {
    commitsList: [
      {
        commit: {
          author: {
            date: "2020-03-10T22:34:52Z"
          }
        },
        html_url:
          "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2964",
        sha: "4380d5d391eee216e651d34700a331ec501c2964"
      }
    ],
    commitsState: "loaded"
  };

  const props: ListOfCommitsProps = { ...defaultProps, ...additionalProps };

  const utils: RenderResult = renderWithTheme(<Commits {...props} />);

  const { queryByTestId, queryAllByTestId } = utils || {};

  const Corners: Element[] = queryAllByTestId("Corner");
  const DashboardElement: Element = queryByTestId("Commits");
  const Error: Element = queryByTestId("Error");
  const ListOfCommits: Element = queryByTestId("ListOfCommits");
  const Loader: Element = queryAllByTestId("Loader")[0];

  return {
    ...utils,
    Corners,
    DashboardElement,
    Error,
    ListOfCommits,
    Loader
  };
}
