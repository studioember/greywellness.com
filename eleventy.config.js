import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { I18nPlugin, RenderPlugin } from "@11ty/eleventy";
import moment from "moment";

export default async function (eleventyConfig) {
  // Configure Eleventy
  eleventyConfig.setOutputDirectory("output/site");

  // Copy `assets` to `output/site/assets`
  eleventyConfig.addPassthroughCopy("assets");

  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(RenderPlugin);
  eleventyConfig.addPlugin(I18nPlugin, {
    defaultLanguage: "en",
    errorMode: "allow-fallback",
  });

  // Collections — locale-specific pages for use in navigation
  eleventyConfig.addCollection("pages_en", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("en/pages/**/*.{md,njk,html}")
      .sort((a, b) => {
        const aTitle = (a.data?.title || a.fileSlug || "").toLowerCase();
        const bTitle = (b.data?.title || b.fileSlug || "").toLowerCase();
        return aTitle.localeCompare(bTitle);
      });
  });

  eleventyConfig.addCollection("pages_es", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("es/pages/**/*.{md,njk,html}")
      .sort((a, b) => {
        const aTitle = (a.data?.title || a.fileSlug || "").toLowerCase();
        const bTitle = (b.data?.title || b.fileSlug || "").toLowerCase();
        return aTitle.localeCompare(bTitle);
      });
  });

  // Group therapy pages (excludes the index listing page itself)
  eleventyConfig.addCollection("groups_en", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("en/pages/groups/*.{md,njk,html}")
      .filter((p) => !p.inputPath.endsWith("/index.md"));
  });

  eleventyConfig.addCollection("groups_es", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("es/pages/groups/*.{md,njk,html}")
      .filter((p) => !p.inputPath.endsWith("/index.md"));
  });

  // Shortcodes
  eleventyConfig.addShortcode(
    "scheduleButton",
    function (text = "Request Appointment") {
      return `<a
      href="https://monicagrey.clientsecure.me"
      class="sp-schedule-btn block w-full px-6 py-4 !text-sm leading-snug font-medium tracking-wide uppercase no-underline text-center rounded-md hover:opacity-90 transition-opacity"
      data-spwidget-scope-id="91b66555-a746-4aaf-97af-68173f0eab96"
      data-spwidget-scope-uri="monicagrey"
      data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
      data-spwidget-scope-global
      data-spwidget-autobind
    >${text}</a>`;
    },
  );

  eleventyConfig.addShortcode(
    "contactButton",
    function (text = "Contact") {
      return `<a
      href="https://monicagrey.clientsecure.me"
      class="sp-contact-btn block w-full px-6 py-4 text-sm leading-snug font-medium tracking-wide uppercase no-underline text-center border-2 border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
      data-spwidget-scope-id="91b66555-a746-4aaf-97af-68173f0eab96"
      data-spwidget-scope-uri="monicagrey"
      data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
      data-spwidget-channel="embedded_widget"
      data-spwidget-type="Contact form"
      data-spwidget-contact
      data-spwidget-scope-global
      data-spwidget-autobind
    >${text}</a>`;
    },
  );

  // Filters
  eleventyConfig.addFilter("dateSimple", function (date) {
    return moment(date).format("LLL");
  });

  eleventyConfig.addFilter("dateISO", function (date) {
    return moment(date).toISOString().split("T")[0];
  });

  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
  };
}
