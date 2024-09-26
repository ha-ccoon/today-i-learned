export interface Invoice {
  customer: string;
  performances: Performance[];
}

export interface Performance {
  playID: string;
  audience: number;
}

type Type = 'tragedy' | 'comedy';

export interface PlayInfo {
  name: string;
  type: Type;
}

interface Plays extends Record<string, PlayInfo> {}

export default function statement(invoice: Invoice, plays: Plays) {
  const statementData = {} as Invoice; // 왜 굳이?

  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances;

  return renderPlainText(statementData, plays);
}

function renderPlainText(data: Invoice, plays: Plays) {
  let result = `청구내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    // 청구 내역 출력
    result += `${playFor(perf).name} : ${usd(amountFor(perf))} (${
      perf.audience
    }석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalValumnCredits()}점\n`;

  return result;

  // get play name
  function playFor(aPerformance: Performance) {
    return plays[aPerformance.playID];
  }

  // get the cost of the play
  function amountFor(aPerformance: Performance) {
    let result = 0;

    switch (playFor(aPerformance).type) {
      case 'tragedy': // 비극
        result = 40000;

        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case 'comedy': // 희극
        result = 30000;

        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;

        break;

      default:
        throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`);
    }

    return result;
  }

  function volumeCreditsFor(perf: Performance) {
    let result = 0;

    result += Math.max(perf.audience - 30, 0);

    if ('comedy' === playFor(perf).type) {
      result += Math.floor(perf.audience / 5);
    }

    return result;
  }

  function totalValumnCredits() {
    let volumeCredits = 0;
    for (let perf of data.performances) {
      volumeCredits += volumeCreditsFor(perf);
    }

    return volumeCredits;
  }

  function usd(aNumber: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  function totalAmount() {
    // local variables
    let result = 0;

    for (let perf of data.performances) {
      result += amountFor(perf);
    }

    return result;
  }
}
