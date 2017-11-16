const { promisify } = require('util');
const { json, createError } = require('micro');
const got = require('got');
const extractor = require('unfluff');
const SummaryTool = require('node-summary');
const asyncSummary = promisify(SummaryTool.summarize);
const summarize = require('summarize');
const users = require('./users.js');

async function unfluff(markup) {
  const unfluffData = extractor(markup);
  let resource = {
    title: unfluffData.title,
    softTitle: unfluffData.softTitle,
    date: Date(unfluffData.date),
    copyright: unfluffData.copyright,
    author: unfluffData.author,
    publisher: unfluffData.publisher,
    text: unfluffData.text,
    image: unfluffData.image,
    tags: unfluffData.tags,
    canonicalLink: unfluffData.canonicalLink,
    lang: unfluffData.lang,
    description: unfluffData.description,
    favicon: unfluffData.favicon,
    links: unfluffData.links
  };
  return resource;
}

async function _getSummary(markup, title, text) {
  // Get summarize data and save all corresponding values to the new resource
  const summaryData = await asyncSummary(title, text);
  const summarizeData = summarize(markup);
  let resource = {
    topics: summarizeData.tags,
    sentiment: summarizeData.sentiment,
    words: summarizeData.words,
    difficulty: summarizeData.difficulty,
    minutes: summarizeData.minutes,

    // console.log(analyzedData);
    summary: {
      text: summaryData || '',
      length: summaryData.length,
      ratio: 100 - 100 * (summaryData.length / (title.length + text.length))
    }
  };

  return resource;
}

exports.getSummary = async url => {
  const response = (await got(url)).body;

  const unfluffData = await unfluff(response);

  // Get summarize data and save all corresponding values to the new resource
  const summaryData = await _getSummary(
    response,
    unfluffData.title,
    unfluffData.text
  );

  return Object.assign(unfluffData, summaryData);
};

exports.getUser = async id => {
  let allUsers = await users;
  if (id >= 0 && id < allUsers.length) {
    let user = allUsers[id];
    return user;
  }
  throw createError(404, 'User not found');
};

exports.getUsers = async () => {
  return await users;
};
