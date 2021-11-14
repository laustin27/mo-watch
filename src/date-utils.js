function formatTime(data) {
    let dataString = data.toString();

    return dataString ?? null;
}

function getTimeDifference(startTime, timestampMinutes, timestampSeconds) {
    const timestampMillis = (timestampMinutes*60000) + (timestampSeconds*1000);
    return new Date(startTime.getTime() + timestampMillis);
}

export {formatTime, getTimeDifference}