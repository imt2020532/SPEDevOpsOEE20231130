CREATE PROCEDURE AddShift
    @name VARCHAR(255),
    @login VARCHAR(255),
    @session VARCHAR(255),
	@start VARCHAR(255),
	@end VARCHAR(255),
	@duration VARCHAR(255)
AS
BEGIN
    DECLARE @date VARCHAR(10) = CONVERT(VARCHAR(10), GETDATE(), 112);
    DECLARE @time VARCHAR(8) = REPLACE(CONVERT(VARCHAR(8), GETDATE(), 108), ':', '');

    INSERT INTO M_Shifts (ch_name, ch_cdate, ch_ctime, ch_ulogin, ch_usession, ch_udate, ch_utime, ch_uulogin, ch_uusession, int_statuscode, ch_StartTime, ch_EndTime, ch_Minute)
    VALUES (@name, @date, @time, @login, @session, NULL, NULL, NULL, NULL, 0, @start, @end, @duration);
END

EXEC AddShift
    @name = 'Anwit',
    @login = 'Andy',
    @session = '123',
	@start = '9AM',
	@end = '10AM',
	@duration = '60';