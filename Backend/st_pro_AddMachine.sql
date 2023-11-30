CREATE PROCEDURE AddMachine
    @ch_name VARCHAR(255),
    @ch_shortname VARCHAR(255),
	@ch_ulogin VARCHAR(255),
    @ch_usession VARCHAR(255)
AS
BEGIN
    DECLARE @cdate VARCHAR(10) = CONVERT(VARCHAR(10), GETDATE(), 112);
    DECLARE @ctime VARCHAR(8) = REPLACE(CONVERT(VARCHAR(8), GETDATE(), 108), ':', '');

    INSERT INTO M_Machines (ch_name, ch_shortname, ch_cdate, ch_ctime, ch_ulogin, ch_usession, ch_udate, ch_utime, ch_uulogin, ch_uusession, int_statuscode)
    VALUES (@ch_name, @ch_shortname, @cdate, @ctime, @ch_ulogin, @ch_usession, NULL, NULL, NULL, NULL, 0);
END

EXEC AddMachine
    @ch_name = 'Lenovo Idea Slimpad 5',
    @ch_shortname = 'Lappy',
	@ch_ulogin = 'Anwit test',
    @ch_usession = 'ABC456';
