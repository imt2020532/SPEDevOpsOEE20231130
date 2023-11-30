

CREATE PROCEDURE GetAllList
    @TableName NVARCHAR(100) -- Parameter to specify the table name
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Construct the dynamic SQL query
    DECLARE @SqlQuery NVARCHAR(MAX);
    SET @SqlQuery = 'SELECT * FROM ' + QUOTENAME(@TableName);

    -- Execute the dynamic SQL query
    EXEC sp_executesql @SqlQuery;
END;


EXEC ERP_OEE.dbo.GetAllList @TableName = 'M_Materials';
