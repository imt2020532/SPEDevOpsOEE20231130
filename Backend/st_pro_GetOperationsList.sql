USE ERP_OEE;
GO

CREATE PROCEDURE OperationsList
    @MaterialIds VARCHAR(MAX)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @SqlQuery NVARCHAR(MAX);

    -- Construct the dynamic SQL query
    SET @SqlQuery = '
    SELECT chkint_material, ch_operationName
    FROM M_ProductOperations
    WHERE chkint_material IN (' + @MaterialIds + ');';

    -- Execute the dynamic SQL query
    EXEC sp_executesql @SqlQuery;
END;


EXEC OperationsList @MaterialIds = '1020001,1020002,1020003';

