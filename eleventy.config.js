import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import moment from "moment";

export default async function (eleventyConfig) {
  // Configure Eleventy
  eleventyConfig.setOutputDirectory("output/site");

  // Copy `assets` to `output/site/assets`
  eleventyConfig.addPassthroughCopy("assets/**/*");

  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Collections
  eleventyConfig.addCollection("pages", function (collectionApi) {
    const pages = collectionApi.getFilteredByGlob("pages/**/*.{md,njk,html}");
    return pages.sort((a, b) => {
      const aTitle = (a.data?.title || a.fileSlug || "").toLowerCase();
      const bTitle = (b.data?.title || b.fileSlug || "").toLowerCase();
      return aTitle.localeCompare(bTitle);
    });
  });

  // Shortcodes
  eleventyConfig.addShortcode("scheduleButton", function (text = "Request Appointment") {
    return `<a
      href="https://monicagrey.clientsecure.me"
      class="sp-schedule-btn"
      data-spwidget-scope-id="91b66555-a746-4aaf-97af-68173f0eab96"
      data-spwidget-scope-uri="monicagrey"
      data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
      data-spwidget-scope-global
      data-spwidget-autobind
    >${text}</a>`;
  });

  // Filters
  eleventyConfig.addFilter("dateSimple", function (date) {
    return moment(date).format("LLL");
  });
}
