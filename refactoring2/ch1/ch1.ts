import { Invoice, Plays, Performance } from './types';

export default function statement(invoice: Invoice, plays: Plays) {
  const statementData = {} as Invoice;

  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);

  return renderPlainText(statementData, plays);

  // 기존의 객체를 수정하지 않고 복사하는 방법으로 데이터 처리 (데이터 불변 처리)
  function enrichPerformance(aPerformance: Performance) {
    const result = Object.assign({}, aPerformance);
    return result;
  }

  // get play name
  function playFor(aPerformance: Performance) {
    return plays[aPerformance.playID];
  }
}

function renderPlainText(data: Invoice, plays: Plays) {
  let result = `청구내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    // 청구 내역 출력
    result += `${perf.playID} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`;
  result += `적립 포인트: ${totalVolumnCredits()}점\n`;

  return result;

  // get the cost of the play
  function amountFor(perf: Performance) {
    let result = 0;

    switch (plays[perf.playID].type) {
      case 'tragedy': // 비극
        result = 40000;

        if (perf.audience > 30) {
          result += 1000 * (perf.audience - 30);
        }
        break;
      case 'comedy': // 희극
        result = 30000;

        if (perf.audience > 20) {
          result += 10000 + 500 * (perf.audience - 20);
        }
        result += 300 * perf.audience;

        break;

      default:
        throw new Error(`알 수 없는 장르 : ${plays[perf.playID].type}`);
    }

    return result;
  }

  function volumeCreditsFor(perf: Performance) {
    let result = 0;

    result += Math.max(perf.audience - 30, 0);

    if ('comedy' === plays[perf.playID].type) {
      result += Math.floor(perf.audience / 5);
    }

    return result;
  }

  function totalVolumnCredits() {
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
