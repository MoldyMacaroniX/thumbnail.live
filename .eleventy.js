const { DateTime } = require("luxon");

module.exports = (config) => {

    config.addPassthroughCopy('_src/assets');
    config.addPassthroughCopy('_src/_data');
    config.addPassthroughCopy({'_src/static':  '.'});

    config.addFilter("date", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLLL d, yyyy");
    });

    return {
        dir: {
            input: '_src',
            output: '_dist'
        },
        // pathPrefix: "/subfolder/",
        templateFormats: ['md', 'njk', 'html'],
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    };

};