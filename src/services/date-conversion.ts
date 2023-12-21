const formattedDate = (date: string) => {

    const dateObject = new Date(date);
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(dateObject);
}

export default formattedDate;