package models

import (
	"gorm.io/gorm"
	"time"
)

type Blog struct {
	Id        uint           `json:"id" gorm:"primaryKey"`
	Title     string         `json:"title"`
	Post      string         `json:"post"`
	Image     string         `json:"image"`
	CreateAt  time.Time      `json:"create_at"`
	UpdateAt  time.Time      `json:"update_at"`
	DeletedAt gorm.DeletedAt `json:"-" gorm:"index"`
}
