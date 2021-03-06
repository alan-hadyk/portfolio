import cicdCategory from "pages/Home/sections/skills/categories/cicdCategory";

describe("pages / Home / sections / skills / categories / cicdCategory", () => {
  test("should have correct content", () => {
    expect(cicdCategory).toEqual({
      iconsWithLabels: [
        {
          iconName: "brandJenkins",
          label: "Jenkins"
        },
        {
          iconName: "brandBuildkite",
          label: "Buildkite"
        },
        {
          iconName: "brandBamboo",
          label: "Bamboo"
        },
        {
          iconName: "brandGithub",
          label: "GitHub Actions"
        },
        {
          iconName: "brandGithub",
          label: "GitHub Enterprise"
        },
        {
          iconName: "brandDocker",
          label: "Docker"
        },
        {
          iconName: "brandGitlab",
          label: "GitLab"
        },
        {
          iconName: "brandStash",
          label: "Stash"
        }
      ],
      title: "CI / CD"
    });
  });
});
