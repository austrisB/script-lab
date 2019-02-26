import { ConsoleLogSeverities } from './LogItem';
import flatten from 'lodash/flatten';
import shuffle from 'lodash/shuffle';

interface ILogDataMinusId {
  message: any;
  severity: ConsoleLogTypes;
}

const logData: ILogDataMinusId[] = [
  {
    message: 'This is a test of an INFO string message.',
    severity: ConsoleLogSeverities.Info,
  },
  {
    message: 'This is a test of a LOG string message.',
    severity: ConsoleLogSeverities.Log,
  },
  {
    message: 'This is a test of a WARNING string message.',
    severity: ConsoleLogSeverities.Warn,
  },
  {
    message: 'This is a test of an ERROR string message.',
    severity: ConsoleLogSeverities.Error,
  },
  {
    message:
      "This is a test of an ERROR message. Also, this error message happens to be very very long. Super long. It's only purpose is to be super long. So long that we can test that the log container properly resizes itself and shows all of this super important, meaningful text that will help us understand if this log will be readable by the user.",
    severity: ConsoleLogSeverities.Error,
  },
  {
    message: 5,
    severity: ConsoleLogSeverities.Warn,
  },
  {
    message: new Error('A sample error'),
    severity: ConsoleLogSeverities.Error,
  },
  {
    message: [11, 22],
    severity: ConsoleLogSeverities.Log,
  },
  {
    message: [['Product', 'Price'], ['Hammer', 17.99], ['Saw', 234.1]],
    severity: ConsoleLogSeverities.Log,
  },
  {
    message: {
      type: 'nestedObject',
      data: {
        a: 5,
        b: [4, 'hello'],
      },
      somethingElse: [['Product', 'Price'], ['Hammer', 17.99], ['Saw', 234.1]],
    },
    severity: ConsoleLogSeverities.Info,
  },
  {
    message: {
      type: `a rather long text that is going to want to need some space. like, a lot of space. lots and lots of space. so much space that it's slightly ridiculous that you need so much space`,
      data: {
        a: `also a rather long text that is going to want to need some space. like, a lot of space. lots and lots of space. so much space that it's slightly ridiculous that you need so much space. wow, even more space. *So* much space`,
        b: [4, 'hello'],
      },
      somethingElse: [
        [
          `A: also a rather long text that is going to want to need some space. like, a lot of space. lots and lots of space. so much space that it's slightly ridiculous that you need so much space. wow, even more space. *So* much space`,
          `B: also a rather long text that is going to want to need some space. like, a lot of space. lots and lots of space. so much space that it's slightly ridiculous that you need so much space. wow, even more space. *So* much space`,
        ],
        ['Hammer', 17.99],
        ['Saw', 234.1],
      ],
    },
    severity: ConsoleLogSeverities.Info,
  },
  {
    message: {
      type: `a rather long text that is going to want to need some space. like, a lot of space. lots and lots of space. so much space that it's slightly ridiculous that you need so much space`,
      longWord: new Array(10)
        .fill('asdfjaskdfasldfasdfasdfasdf3453423234234safsdfasdfasdf2323432324432sdfasd')
        .join(''),
      data: {
        a: `also a rather long text that is going to want to need some space. like, a lot of space. lots and lots of space. so much space that it's slightly ridiculous that you need so much space. wow, even more space. *So* much space`,
        b: [4, 'hello'],
      },
      somethingElse: [
        [
          `A: also a rather long text that is going to want to need some space. like, a lot of space. lots and lots of space. so much space that it's slightly ridiculous that you need so much space. wow, even more space. *So* much space`,
          `B: also a rather long text that is going to want to need some space. like, a lot of space. lots and lots of space. so much space that it's slightly ridiculous that you need so much space. wow, even more space. *So* much space`,
        ],
        ['Hammer', 17.99],
        ['Saw', 234.1],
      ],
    },
    severity: ConsoleLogSeverities.Info,
  },
];

export function getLogPages(pageCount: number): ILogData[] {
  const pageCopies: ILogDataMinusId[][] = new Array(pageCount).fill(logData);

  const logs: ILogData[] = flatten(pageCopies).map((log, i) => ({
    ...log,
    id: i.toString(),
  }));

  // For anything greater than 1 page, shuffle all the elements for added realism:
  return pageCount > 1 ? shuffle(logs) : logs;
}
