module.exports = {
  parserOpts: {
    mergePattern: /^Merged\sPR\s(\d+):\s(.*)/g,
    // mergePattern: /^Merged:\s(.*)/g,
    mergeCorrespondence: ['id', 'source'],
  },
  issueUrlFormat: '{{host}}/{{owner}}/{{repository}}/_workitems/edit/{{id}}',
  commitUrlFormat:
    '{{host}}/{{owner}}/{{repository}}/_git/it-solve-starter-front/commit/{{hash}}',
};
