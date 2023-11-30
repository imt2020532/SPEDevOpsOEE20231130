USE [GSTShakuntalaSteels_FMS]
GO

/****** Object:  UserDefinedTableType [dbo].[T_objId_Type]    Script Date: 23-06-2023 11:29:46 ******/
DROP TYPE [dbo].[T_objId_Type]
GO

/****** Object:  UserDefinedTableType [dbo].[T_objId_Type]    Script Date: 23-06-2023 11:29:46 ******/
CREATE TYPE [dbo].[T_objId_Type] AS TABLE(
	[pkint_objectid] [int] NULL,
	[int2] [int] NULL,
	[int3] [int] NULL,
	[int4] [int] NULL,
	[dec1] [decimal](19, 2) NULL,
	[dec2] [decimal](19, 2) NULL,
	[dec3] [decimal](19, 2) NULL,
	[dec4] [decimal](19, 2) NULL,
	[str1] [varchar](100) NULL,
	[str2] [varchar](100) NULL,
	[str3] [varchar](100) NULL,
	[str4] [varchar](100) NULL
)
GO


