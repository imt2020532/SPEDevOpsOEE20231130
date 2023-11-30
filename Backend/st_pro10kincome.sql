CREATE PROCEDURE GetRowsByNumbers
    @NumberList VARCHAR(MAX)
AS
BEGIN
    SET NOCOUNT ON;

    -- Create a temporary table to hold the numbers
    CREATE TABLE #Numbers (Number INT);

    DECLARE @Delimiter CHAR(1) = ',';
    DECLARE @StartPosition INT = 1;
    DECLARE @EndPosition INT;
    DECLARE @Number VARCHAR(MAX);

    -- Loop through the comma-separated list and insert the numbers into the temporary table
    WHILE LEN(@NumberList) > 0
    BEGIN
        SET @EndPosition = CHARINDEX(@Delimiter, @NumberList);

        IF @EndPosition = 0
            SET @EndPosition = LEN(@NumberList) + 1;

        SET @Number = SUBSTRING(@NumberList, @StartPosition, @EndPosition - @StartPosition);
        SET @NumberList = STUFF(@NumberList, @StartPosition, @EndPosition - @StartPosition + 1, '');

        INSERT INTO #Numbers (Number)
        VALUES (CAST(@Number AS INT));
    END;

    -- Query the table to retrieve the rows matching the numbers
    SELECT *
    FROM dbo.M_ProductOperations
    WHERE chkint_material IN (SELECT Number FROM #Numbers);

    -- Drop the temporary table
    DROP TABLE #Numbers;
END;

DECLARE @NumberList VARCHAR(MAX);
SET @NumberList = '1020001,1020002';

EXEC GetRowsByNumbers @NumberList;

