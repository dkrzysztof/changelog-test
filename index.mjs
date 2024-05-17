import { CommitParser } from 'conventional-commits-parser';
import { writeChangelogString } from 'conventional-changelog-writer';
import options from './.versionrc.js';

const messages = [
  'Merged PR #1: feat: change from normal commit\n\nCo-authored-by: Krzysztof <krzysztof.dydak@it-solve.pl>',
  'Merge pull request #11 from dkrzysztof/feat/merge-test-#1\n\nfeat: new change from branch - merge title commit',
  'feat: new change from branch normal commit',
  'feat: change from normal commit #8',
  'Merged PR 52: #242 forgot password integration  Related work items: #242\n\nmerge test #3',
  'merge test #3',
  'Commit 97878ca9: Merged PR 52: #242 forgot password integration  Related work items: #242',
  'merge test #2',
  'Merge pull request #8 from dkrzysztof/#5/merge-test\n\nfeat: new merge test',
  'merge test',
];

const run = async () => {
  const parser = new CommitParser(options.parserOpts);

  const parsed = messages.map((message) => parser.parse(message));

  console.log(
    // parsed.map(p => p.merge),
    await writeChangelogString(parsed, undefined, options?.writerOpts),
  );
};

run();
